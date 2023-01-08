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
with open('projects.md', 'r') as f:
    lines = f.readlines()

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

# write projects.json
with open('projects.json', 'w') as f:
    json.dump(projects, f)

 