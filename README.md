# Backbone - Parby Warker Products 👓🕶

`git clone && cd bb-pw-products`

Run Dev Server: `npm start`

Navigate to: `http://localhost:3000`

> Description: An `Express` server providing API routing for product `FETCH/PUT/DELETE` and serving an `Angular SPA UI` that displays a product list with Price Update and Delete functions

## Project Generation for Angular Universal 🌌

`ng add @nguniversal/express-engine --clientProject bb-pw-products`

`"start": "npm run build:ssr && npm run serve:ssr"`

## Challenge Guidlines

[x] Fetch products

[x] Update their price

[x] Delete an product

> This data does not need to persist (no need for database). Add the appropriate UI for rendering these items as seen below. Please add the ability to edit prices within the UI, as well as UI for deleting an item - integrating with the API that you have created.

## TODO

[ ] Reconfigure table layout to allow for separation according to the UI example provided - try straight CSS or get rid of table schema and replace with `<div class="tbody"><div class="trow"></div></div>`

```css
table {
  border-collapse: separate;
  border-spacing: 0 1em;
}
```
