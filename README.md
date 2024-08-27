# Full-Stack Developer Bootcamp Module 13 - Challenge: E-Commerce Back-End

## Table of Contents

- [Description](#description)
- [Install](#install)
- [Usage](#usage)
- [Generator](#generator)
- [Badge](#badge)
- [Credit and Source Code](#credits-and-code-source)
- [Related Efforts](#related-efforts)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [GitHub Repository Location (HTTPS)](#github-repository-location-https)
- [Screencastify Video Location](#screencastify-video-location)
- [Application Screenshots](#application-screenshots) 


## Description

The E-Commerce Back-End is an Express-, Postgres- and Sequelize-base code base that provides the data ingestion, storage, update and destruction of data related to a notional e-commerce site, including Products, and the Categories and Tags associated with those Products. 

The code base is available only through a local instance (i.e., it is not deployed through a publically-accessible web-instance, such as Heroku), data is accessible only through that instance.

Data managed through the code base is maintained and managed through a local Postgres database, utilizing Sequelize as an ORM to communicate with the Node.js code base. 

The E-Commerce Back-End source code is published on GitHub, and may be cloned to individual User computers to instantiate local versions.

Data is retrieved, created, updated and destroyed through an API platform such as Postman or Insomnia.

The code base lacks any front-end architecture to permit User interface with the data outside of an API platform.

Data may be viewed through the Postgres shell, under the seeded database, ecommerce_db, as well as through an API platform.

Because E-Commerce Back-End data is stored a local Postgres instance, data will persist across User sessions on individual, hosting computers and will be visible to all Users of the local Postgres instance on individual computers.


## Installation

The E-Commerce Back-End source code may be downloaded from its GitHub repository, and run directly by a hosting computer.

No Installation of the E-Commerce Back-End code base itself is required; however, the applicable Node.js Modules must be installed to local hosting computers for the code base to function (npm install).


## Usage

The E-Commerce Back-End code base is intended for use by one or more Users to record data related to a notional e-commerce website, which will be held locally, and persist across multiple sessions. 

All Users of the E-Commerce Back-End code base on a local computer will have full visibility to all Users' data.


## Credits and Code Source

Routes-management code, within the Routes folder, and data Models, within the Models folder, was substantively outlined and contributed to by Course Instructor and Tutors, who provided guidance on appropriate Routes and Sequelize syntax to execute CRUD operations.

Additional Code, where referenced from a third-party Source, is noted in Comments accompanying the relevant Code lines.


## License

Copyright <YEAR> <COPYRIGHT Chris Milazzo>


MIT License

Copyright (c) 2024 MeanderingBrook

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Badges

N / A


## Features

N / A


## How to Contribute

N / A


## Tests

`console.log` output of data specific to particular data requests and responses; see Routes, and Models.


## GitHub Repository Location (HTTPS)

https://github.com/MeanderingBrook/13_Challenge_E-Commerce-Back-End.git


## Screencastify Video Location

https://drive.google.com/file/d/1x-B1FzcLLOdw0WVO0zMm87CG0Wdt8oFN/view


## Application Screenshots

![E-Commerce Back-End: Data Seed Process - Screenshot 01](./assets/images/E-Commerce-Back-End_Express-Sequelize-App_Screenshot-01_Database-Seed-Process.png?raw=true "E-Commerce Back-End: Data Seed Process")

![E-Commerce Back-End: Data Seed Process - Screenshot 02](./assets/images/E-Commerce-Back-End_Express-Sequelize-App_Screenshot-02_Database-Seed-Complete.png?raw=true "E-Commerce Back-End: Data Seed Process")

![E-Commerce Back-End: Data Retrieval - Tags (GET Request) - Screenshot 03](./assets/images/E-Commerce-Back-End_Express-Sequelize-App_Screenshot-03_Data-Retrieval-Tags.png?raw=true "E-Commerce Back-End: Data Retrieval - Tags (GET Request)")

![E-Commerce Back-End: Data Creation - Categories (POST Request) - Screenshot 04](./assets/images/E-Commerce-Back-End_Express-Sequelize-App_Screenshot-04_Data-Creation-Categories.png?raw=true "E-Commerce Back-End: Data Creation - Categories (POST Request)")

![E-Commerce Back-End: Data Update - Categories (PUT Request) - Screenshot 05](./assets/images/E-Commerce-Back-End_Express-Sequelize-App_Screenshot-05_Data-Update-Categories.png?raw=true "E-Commerce Back-End: Data Update - Categories (PUT Request)")

![E-Commerce Back-End: Data Destruction - Categories (DELETE Request) - Screenshot 06](./assets/images/E-Commerce-Back-End_Express-Sequelize-App_Screenshot-06_Data-Destruction-Categories.png?raw-true "E-Commerce Back-End: Data Destruction - Categories (DELETE Request)")
