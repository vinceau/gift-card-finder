# Ultimate Gift Card Finder

This websites helps you find all [Ultimate gift cards](https://www.ultimategiftcards.com.au/) that match a particular store. So if you're looking to make a purchase from Officeworks for example, searching for "office" shows that you can purchase Ultimate Everyone, Home, Kids, Students, and Teens gift cards.

![Screenshot](./screenshot.png)

[Click here](https://vinceau.github.io/gift-card-finder) to visit the website.


There's also a CLI version of the same tool which let's you search for multiple stores. See below for usage details.

## CLI Usage

```bash
node main.js storename
```

For example, to find the stores that support Officeworks.

```bash
$ node main.js office
Everyone, Home, Kids, Students, Teens
```

To find all gift cards which support both Officeworks and JB Hi-fi, you could do:

```bash
$ node main.js office jb
Everyone, Home, Kids, Teens
```
