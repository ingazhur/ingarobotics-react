# read projects.md and output projects.json
# format: any ### is a title field, text below is a description field, 
# and if you see "img: ", then the text that follows is a path to img field
# example:
# ### title
# description
# tags: tag1, tag2
# img: path/to/img

import json

# read projects.md
try:
    with open('projects.md', 'r') as f:
        lines = f.readlines()
except:
    print('Error: projects.md not found')
    exit()

# parse projects.md
projects = []
project = {}
for line in lines:
    if line.startswith('###'):
        # new project
        if project:
            projects.append(project)
        project = {}
        project['title'] = line[4:].strip()
    elif line.startswith('img:'):
        # img
        raw_image = line[4:].strip()
        project['img'] = "../imgs/" + raw_image
    elif line.startswith('tags:'):
        # tags
        raw_tags = line[5:].strip()
        project['tags'] = raw_tags.split(',')
    else:
        # description
        if 'description' in project:
            project['description'] += line
        else:
            project['description'] = line

# add last project
projects.append(project)

# in a description section, identify markdown links and replace them with html links
# so that they can be rendered in the description section
# example: [link text](link url) -> <a href="link url">link text</a>
for project in projects:
    description = project['description']
    while True:
        start = description.find('[')
        end = description.find(']')
        if start == -1 or end == -1:
            break
        link_text = description[start+1:end]
        link_url = description[end+2:description.find(')', end)]
        link = '<a href="' + link_url + '" target="_blank">' + link_text + '</a>'
        description = description[:start] + link + description[description.find(')', end)+1:]
    # append <p> at the beginnging and </p> at the end of description
    description = '<p>' + description + '</p>'
    project['description'] = description

# write projects.json
with open('projects.json', 'w') as f:
    json.dump(projects, f)

# ================

# color scheme for project tags
colors = {
    'all projects': { 'borderColor': '#6AAADF', 'backgroundColor': '#304469', 'textColor': '#D3EBEC' },
    'personal projects': { 'borderColor': '#9F9FF8', 'backgroundColor': '#453061', 'textColor': '#FEF6FE' },
    'neurotech': { 'borderColor': '#80CE93', 'backgroundColor': '#385841', 'textColor': '#D7DDD9' },
    'software': { 'borderColor': '#F2C45D', 'backgroundColor': '#836534', 'textColor': '#FFFABC' },
    'firmware': { 'borderColor': '#6AAADF', 'backgroundColor': '#304469', 'textColor': '#D3EBEC' },
    'hardware': { 'borderColor': '#ED9AB6', 'backgroundColor': '#62344B', 'textColor': '#FDE6FB' },
    'hackathon projects': { 'borderColor': '#EF8452', 'backgroundColor': '#7E4F27', 'textColor': '#E5DBD4' },
    'computer vision': { 'borderColor': '#80CE93', 'backgroundColor': '#385841', 'textColor': '#D7DDD9' },
    'class projects': { 'borderColor': '#DF3D30', 'backgroundColor': '#642D24', 'textColor': '#F5DFD3' },
}

with open('colors.json', 'w') as f:
    json.dump(colors, f)

