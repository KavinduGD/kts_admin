# KTS Admin Dashboard

## Description
This is the administrative frontend for the KTS application, providing management interfaces and administrative controls. Built with React and Vite.

## 1. How to Set Up Envs
Create a `.env` file in the root of the project. The application requires the following environment variables:
- `VITE_GOOGLE_API_KEY`: Google API key for map or other Google services (e.g., `AIzaSy...`)

## 2. How to Run in Dev Env
To run this application in a development environment:
1. Make sure you have Node.js and npm installed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   Alternatively, you can use the provided `compose.dev.yaml` for Docker setup:
   ```bash
   docker-compose -f compose.dev.yaml up --build
   ```

## 3. How to Run in Prod
For production, you can build the application using:
```bash
npm run build
```
Or you can use the Docker production setup:
```bash
docker-compose -f compose.prod.yaml up -d --build
```

## 4. How to Use infra Repo to Deploy in AWS and Create a Pipeline
Deployment to AWS is managed via the **KTS-infra** repository.
1. Clone the `KTS-infra` repository.
2. The infrastructure repository contains the necessary AWS configuration code to provision AWS resources (like ECS, ECR, ALB, EKS).
3. Update the necessary configuration in the `KTS-infra` repository and apply the infrastructure.
4. **CI/CD Pipeline**: 
   - A `Jenkinsfile` is provided in this repository to automate the build and deployment process.
   - Configure your Jenkins or GitHub Actions pipeline to trigger on pushes to the main branch.
   - The pipeline will run tests (using SonarQube as defined in `sonar-project.properties`), build the Docker image using `Dockerfile.prod`, and push it to AWS ECR.
   - The pipeline then updates the EKS/ECS deployment manifests or uses GitOps tools (like Argo CD) to deploy the new image to the provisioned AWS environment.
