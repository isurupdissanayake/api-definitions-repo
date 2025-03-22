# API Definitions Repository

This repository contains API definitions, documentation, and test collections for multiple APIs. It follows OpenAPI 3.0 specifications and integrates with Postman for API testing and validation.

## 📁 Project Structure

```
api-definitions-repo/
│   README.md                # Project documentation
│   tree.txt                 # Folder structure reference
│
├───.github/workflows/       # CI/CD workflows
│       openapi-validation.yml  # OpenAPI validation workflow
│       postman-tests.yml       # Postman API test automation
│
└───src/
    ├───definitions/         # API definition files
    │   │   index.yaml       # Root OpenAPI definition file
    │   │
    │   ├───components/      # Reusable OpenAPI components
    │   │       responses.yaml
    │   │       schemas.yaml
    │   │       security.yaml
    │   │
    │   └───online-booking/  # API definitions for Online Booking
    │       ├───bookings/
    │       │       bookings.yaml  # Bookings API definition
    │       │
    │       └───properties/
    │               properties.yaml  # Properties API definition
    │
    ├───postman/             # Postman collections and environments
    │   ├───collections/
    │   │       bookings.json      # Bookings API collection
    │   │       properties.json    # Properties API collection
    │   │
    │   └───environments/
    │           dev.postman_environment.json   # Development environment
    │           staging.postman_environment.json # Staging environment
    │           prod.postman_environment.json  # Production environment
    │
    └───scripts/             # Automation scripts
            generate_postman.sh  # Script to generate Postman collections
            validate_openapi.sh  # Script to validate OpenAPI definitions
```

## 🚀 Usage

### **1. Validating OpenAPI Definitions**

To validate OpenAPI specifications, run:

```sh
./scripts/validate_openapi.sh
```

### **2. Running Postman Tests**

Execute Postman tests via GitHub Actions or locally:

```sh
newman run src/postman/collections/bookings.json -e src/postman/environments/dev.postman_environment.json
```

### **3. CI/CD Automation**

- **openapi-validation.yml**: Automatically validates OpenAPI definitions.
- **postman-tests.yml**: Runs Postman tests on API changes.

## 📜 Contributing

1. Fork the repository.
2. Create a new feature branch (`feature/new-api`).
3. Commit changes and submit a pull request.

## 📄 License

This project is licensed under the MIT License.

