
# KeystoneJS Chinese Localization Version

KeystoneJS is a very user-friendly CMS framework built entirely with JavaScript. It allows frontend developers with a basic knowledge of JavaScript to quickly set up a CMS system. Whether you want to create a simple business website or a blog, KeystoneJS makes it very convenient. I have localized the official demo into Chinese, made light modifications, replaced Google Fonts, and used CDN for essential libraries to make it more suitable for the local environment.

**Continuous updates... If you're interested, feel free to star the project!**

## Features

- **Chinese Localization**: Translated version of the official KeystoneJS demo into Chinese
- **Light Customization**: Google Fonts have been replaced, and essential libraries are loaded via domestic CDN
- **Optimized for Local Environment**: Better support for local usage, minimizing reliance on overseas resources
- **Frontend-Friendly**: Perfect for frontend developers with a JavaScript background

## Deployment

### 1. Install Dependencies

To install the project dependencies, run:

```bash
npm i
```

### 2. Start MongoDB Service

Ensure MongoDB is running, and keep the connection URI handy.

### 3. Configure Environment Variables

In the project root directory, create a `.env` file and add the following information:

```bash
COOKIE_SECRET=your-random-string
CLOUDINARY_URL=your-cloudinary-url
MONGO_URI=your-mongodb-connection-string
```

### 4. Run Development Server

To start the development server, run:

```bash
npm run dev
```

This will launch the project in development mode.

### 5. Run Production Server

To build and run the project in production mode, run:

```bash
npm run pro
```

## More Information

For more details on installation and deployment, refer to the official KeystoneJS documentation.

---

**Continuous Updates...** If you find this project helpful, feel free to give it a star! Thank you!
