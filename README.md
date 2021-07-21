# Markdown2JSON

Markdown2JSON repository

# For devs

## First time install

    $> docker-compose up -d
    $> npm install
	$> npx prisma generate
    $> prisma migrate dev --name initial-migration --create-only

## New migration (model editing)

Once you have done a modification on `schema.prisma` execute these commands:

    $> npx prisma migrate dev
    $> npx prisma generate

:warning: don't forget to commit and push your changes.