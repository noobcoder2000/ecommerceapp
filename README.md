
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Nike Shoe Store E-Commerce Website</h1>
    <p>Welcome to the Nike Shoe Store, an e-commerce website where you can explore and purchase a wide range of Nike shoes. This README provides an overview of the website, its features, and how to get started.</p>
    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#getting-started">Getting Started</a></li>
        <li><a href="#deployment">Getting Started</a></li>
        <li><a href="#database">Database</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#contributing">Contributing</a></li>
        <li><a href="#license">License</a></li>
    </ul>
    <h2 id="features">Features</h2>
    <p>Our Nike Shoe Store offers the following features to our users:</p>
    <ul>
        <li><strong>Browse and Search:</strong> Explore our extensive collection of Nike shoes by browsing categories or using the search functionality.</li>
        <li><strong>Product Details:</strong> View detailed information about each shoe, including product images, descriptions, available colors, and sizes.</li>
        <li><strong>Add to Cart:</strong> Select your desired shoe size and color, and add products to your shopping cart.</li>
        <li><strong>Admin Dashboard:</strong> Manage product listings, view and process orders, and update the website's content.</li>
    </ul>
    <h2 id="prerequisites">Prerequisites</h2>
    <p>Before you begin, ensure you have met the following requirements:</p>
    <ul>
        <li><a href="https://nodejs.org/">Node.js</a> installed on your local machine.</li>
        <li>A code editor such as <a href="https://code.visualstudio.com/">Visual Studio Code</a>.</li>
    </ul>
    <h2 id="getting-started">Getting Started</h2>
    <p>To get a local copy of the project up and running, follow these steps:</p>
    <ol>
        <li>Clone the repository:</li>
    </ol>
    <pre><code>git clone https://github.com/noobcoder2000/ecommerceshoes.git
cd ecommerceshoes</code></pre>
    <ol start="2">
        <li>Install project dependencies:</li>
    </ol>
    <pre><code>npm install</code></pre>
    <ol start="3">
        <li>Start the development server:</li>
    </ol>
    <pre><code>npm start</code></pre>
    <ol start="4">
        <li>Open your web browser and navigate to <a href="http://localhost:3000">http://localhost:3000</a> to access the Nike Shoe Store.</li>
    </ol>
  <h2 id="deployment">Deployment on Azure Static Web Apps</h2>
<p>The Nike Shoe Store E-Commerce Website is hosted on Azure Static Web Apps, which provides a fast and scalable platform for serving static web content. Here's how you can deploy your own instance of the website:</p>

<ol>
    <li>Sign in to the <a href="https://portal.azure.com/">Azure portal</a>.</li>
    <li>Create a new Azure Static Web Apps resource.</li>
    <li>Follow the setup wizard to connect your GitHub repository to the Azure Static Web Apps resource.</li>
    <li>Configure the build and deployment settings for your project.</li>
    <li>Once the deployment is complete, your Nike Shoe Store will be accessible via a unique URL provided by Azure Static Web Apps.</li>
</ol>

<p>For more detailed instructions and best practices for deploying a static website with Azure Static Web Apps, refer to the <a href="https://docs.microsoft.com/en-us/azure/static-web-apps/getting-started">Azure Static Web Apps documentation</a>.</p>
    <h2 id="database">Database</h2>
    <p>Our e-commerce site uses an Azure SQL Database to store product information, user data, and order history. The database schema includes tables for users, products, orders, and more. You can find the SQL scripts to create and populate the database in the <code>database</code> directory.</p>
    <p>To connect your application to the Azure SQL Database, you'll need to configure the database connection string in your code. Ensure that you have the necessary credentials and firewall rules set up in your Azure account.</p>
    <h2 id="usage">Usage</h2>
    <ul>
        <li>Browse the website to explore our collection of Nike shoes.</li>
        <li>Sign up for an account or log in if you're an existing user.</li>
        <li>Select your desired shoe size and color for each product.</li>
        <li>Provide shipping and payment information to complete your purchase.</li>
        <li>Admins can access the dashboard to manage products and orders.</li>
    </ul>
    <h2 id="contributing">Contributing</h2>
    <p>We welcome contributions from the community. If you'd like to contribute to the Nike Shoe Store project, please follow our <a href="CONTRIBUTING.md">contribution guidelines</a>.</p>
    <h2 id="license">License</h2>
    <p>This project is licensed under the <a href="LICENSE">MIT License</a>. See the <a href="LICENSE">LICENSE</a> file for details.</p>
    <hr>
  
