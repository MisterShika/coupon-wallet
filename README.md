# coupon-wallet

## Project Outline

### Accounts

<p>There are two types of accounts. A "standard" user, and a vendor.<br />
Users can receive and redeem coupons. <br />
Vendors can distribute coupons</p>

### User Data

<p>Users will have account-wide EXP as well as vendor specific EXP.<br />
Users will also have a list of vendors they "follow" or "subscribe" to.</p>

### Vendor Data

<p>Vendors will be able to distribute coupons individually, by followers, or by followers according to level.</p>

### Standard Use Flow

<ol>
    <li>Vendors distribute coupons.</li>
    <li>Users receive coupons.</li>
    <li>Users convert coupon into QR code.</li>
    <li>Vendors redeem user's QR code.</li>
    <li>Users receive experience according to the coupon.</li>
</ol>

### Color Notes (So I don't forget)

Greens
<ul>
    <li>#323620</li>
    <li>#445117</li>
    <li>#67793B</li>
    <li>#809A67</li>
    <li>#C7DABC</li>
</ul>

Oranges
<ul>
    <li>#F27227</li>
    <li>#FF9900</li>
    <li>#FFB347</li>
    <li>#FFCC66</li>
    <li>#FFDAB9</li>
</ul>


## (Saving all of these JUST IN CASE I forget)

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

#### Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

##### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

##### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

##### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


##### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

##### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

##### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

##### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
