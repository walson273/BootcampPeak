<a name="readme-top"></a>

### Built With


* Vite + React JS
* Node JS
* Material UI
* Sequelize
* Express
* Render
  


<!-- GETTING STARTED -->

<!-- INTEGRANTES -->
## Integrantes

* Oscar Cruz
* Carlos Villa
* Wilson Herrera	

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Before cloning the git hub make sure to have the following installed


* Install Node JS

	Go to the official Node JS webpage  [here](https://nodejs.org/en/), download and install it.

  
* Install Vite

  Vite requires node.js 18.0+. Using a terminal run this command
  ```sh
  npm create vite@latest
  ```

	<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/walson273/BootcampPeak.git
   ```
2. Open a terminal in each folder (`cliente`, `server`)  and install NPM packages using this command:
   ```sh
   npm install
   ```
3. To turn on the backened on the terminal for the `server` folder run
   ```sh
   node --watch src/index.js
   ```
4. To turn on the frontend on thet terminal for the  `cliente` folder run 
   
   ```sh
   npm run dev
   ```
5. Keep both terminals open! The terminal for the `cliente` folder should show you the port where the page is hosted. Normally being
	
   ```
   http://localhost:5173
   ```
	   
6. if you wish to visualize the database that was created and posted on [Render](https://render.com) using the following External database URL, on the development for the project we use [DBeaver] (https://dbeaver.io)

   ```
   postgres://prueba_swli_user:TMlC3pJnWIhNMtImWheg58gmS7Qr20Dn@dpg-cou2olq0si5c7397g4vg-a.oregon-postgres.render.com/prueba_swli
   ```

   
   
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

This web page acts as a payroll portal for employees wishing to find their history payments.

Login is the first page loaded using the path `/`. Email and password are asked before being able to access any other path.

For test purposes you can try this two users

	1. This user is a supervisor. Email: oscarSupervisor@teleperfumes.com Password: Siuuuun't
 	2. This user is a regular employee. Email: uanitaUser@teleperfumes.com Password: finofinofilipino 

Register IS not available in the login page, this option is restricted for users with supervisor status reviewed later on.

After a succesful login, the page will be redirected to the path `/menu` and depending on the user status it will have different options.

Starting with a regular user it will give the options
 
 	1. Perfil
  	2. Ver Nominas
   	3. Cerrar sesion

`Perfil` using the path `/menu/perfil/:id` will show the employee information registered on the database with no further options available. 
`Ver nominas` has the path `/menu/ver_nominas` is where the page with all the payroll information is going to be shown. The table will include earnings and discounts for each month where the user was given a payment.

If instead, the user has the supervisor status different options are available

 	1. Perfil
  	2. Ver Nominas
   	3. Buscar
    	4. Cerrar sesion

`Ver Nominas` remains the same functionality, as is expected this information is provided by an external source, is not possible for any user to change it from the webpage.
Instead a supervisor on the `Perfil` option will now have available the option to `Modificar` or `Buscar`.

Clicking `Modificar` on the path `/menu/perfil/modificar/:id` will allow the supervisor to update its own information, although only certain items can be modified, this includes phone number, email, assigned charge and team. Information as Name or ID are not allowed.

If the `Buscar` option is selected with the path `/menu/buscar`, a list of all the employees under the supervisor's team will be shown, a search bar is given to filter employees by name. A `Modificar` button is given for each employee, clicking on it will redirect back to `Perfil` for the respective user clicked, only supervisors are allowed to do see other profiles and use them to make modification as stated before.

Besides the search bar in `Buscar` a plus icon is shown, clicking on it will redirect the supervisor and it will give the option to set up a new user into the database.

Lastly, `Cerrar Sesion` will log out the user from the page and it will lock any path from being shown until a new login is made.

<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- CONTACT -->
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>







                                     
