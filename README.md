# Arion 

Empowering Admin Control, Unleashing Efficiency

A proficient application specializing in developing administrative applications tailored for Beehive Corporation's diverse range of web applications, streamlining their management processes effectively.

## Frontend Installation
- Open the terminal in any preferred location, create a folder name `ArionApplication`, and move inside with the following command.
```
mkdir ArionApplication
```
```
cd ArionApplication
```
- Open this folder in VS Code with the following command.
```
code.
```
- To clone the repository, open the terminal and run the following command.
```
git clone https://github.com/ApurvChatur/ArionApplication.git
```
- Then navigate to `site/frontend` with the following command.
```
cd site/frontend
```
- Install all the dependencies with the following command.
```
npm install
```
- Create a file `.env` in the root directory i.e. `site/frontend` with the following command.
```
mkdir ".env"
```
- Add `VITE_ENVIRONMENT=Development` as an environment variable with the following command.
``` 
echo VITE_ENVIRONMENT=Development > .env
```
- Now start the development server with the following command.
```
npm run dev
```
- We are done with the frontend part, now we need to set up the backend.

## Backend Installation
- To set up the backend, follow the steps mentioned in the documentation of [AnkasApplication](https://github.com/ApurvChatur/AnkasApplication?tab=readme-ov-file#backend-installation).
- Kindly, check the documentation properly and ensure you are setting up the backend for `ArionApplication`.

## Administration Installation
- Please ensure you have set up the backend for the respective application, before setting up the admin.
- Open the terminal in any preferred location, create a folder named `ArionApplication`, and move inside with the following command.
```
mkdir ArionApplication
```
```
cd ArionApplication
```
- Open this folder in VS Code with the following command.
```
code .
```
- To clone the repository, open the terminal and run the following command.
```
git clone https://github.com/ApurvChatur/ArionApplication.git
```
- Then navigate to `site/admin` with the following command.
```
cd site/admin
```
- Install all the dependencies with the following command.
```
npm install
```
- Create a file `.env` in the root directory i.e. `site/admin` with the following command.
```
mkdir ".env"
```
- First, add the following common environment variables  
`VITE_ENVIRONMENT=Development`  

- Now, add the following environment variables, depending on your application
  1. For BeehiveApplication  
`VITE_CORPORATION=BeehiveCorporation`  
`VITE_ORGANISATION=PinwheelOrganisation`  
`VITE_APPLICATION=BeehiveApplication`  
  2. For AndromedaApplication  
`VITE_CORPORATION=BeehiveCorpo ration`  
`VITE_ORGANISATION=PinwheelOrganisation`  
`VITE_APPLICATION=AndromedaApplication`  
  3. For PinwheelApplication  
`VITE_CORPORATION=BeehiveCorporation`  
`VITE_ORGANISATION=PinwheelOrganisation`  
`VITE_APPLICATION=PinwheelApplication`  
  4. For TadpoleApplication  
`VITE_CORPORATION=BeehiveCorporation`  
`VITE_ORGANISATION=PinwheelOrganisation`  
`VITE_APPLICATION=TadpoleApplication`  
  5. For AcruxApplication  
`VITE_CORPORATION=BeehiveCorporation`  
`VITE_ORGANISATION=PinwheelOrganisation`  
`VITE_APPLICATION=AcruxApplication`  
  6. For AnserApplication  
`VITE_CORPORATION=BeehiveCorporation`  
`VITE_ORGANISATION=PinwheelOrganisation`  
`VITE_APPLICATION=AnserApplication`  
  7. For AquilaApplication  
`VITE_CORPORATION=BeehiveCorporation`  
`VITE_ORGANISATION=PinwheelOrganisation`  
`VITE_APPLICATION=AquilaApplication`  
  8. For BellatrixApplication  
`VITE_CORPORATION=BeehiveCorporation`  
`VITE_ORGANISATION=PinwheelOrganisation`  
`VITE_APPLICATION=BellatrixApplication`  
  9. For CapellaApplication  
`VITE_CORPORATION=BeehiveCorporation`  
`VITE_ORGANISATION=PinwheelOrganisation`  
`VITE_APPLICATION=CapellaApplication`  
  10. For ArionApplication  
`VITE_CORPORATION=BeehiveCorporation`  
`VITE_ORGANISATION=AndromedaOrganisation`  
`VITE_ENTERPRISE=AcruxEnterprise`  
`VITE_APPLICATION=ArionApplication`
  11. For AnkasApplication  
`VITE_CORPORATION=BeehiveCorporation`  
`VITE_ORGANISATION=AndromedaOrganisation`  
`VITE_ENTERPRISE=AcruxEnterprise`  
`VITE_APPLICATION=AnkasApplication`  
  12. For AbolApplication  
`VITE_CORPORATION=BeehiveCorporation`  
`VITE_ORGANISATION=AndromedaOrganisation`  
`VITE_ENTERPRISE=AcruxEnterprise`  
`VITE_APPLICATION=AbolApplication`  
  13. For TechfolioApplication  
`VITE_CORPORATION=BeehiveCorporation`  
`VITE_ORGANISATION=TadpoleOrganisation`  
`VITE_ENTERPRISE=BellatrixEnterprise`  
`VITE_FIRM=TechfolioFirm`   
`VITE_APPLICATION=TechfolioApplication` 
  14. For ApurvChaturApplication  
`VITE_CORPORATION=BeehiveCorporation`  
`VITE_ORGANISATION=TadpoleOrganisation`  
`VITE_ENTERPRISE=BellatrixEnterprise`  
`VITE_FIRM=TechfolioFirm`   
`VITE_APPLICATION=ApurvChaturApplication`  
  15. For AnushreeMandapeApplication  
`VITE_CORPORATION=BeehiveCorporation`  
`VITE_ORGANISATION=TadpoleOrganisation`  
`VITE_ENTERPRISE=BellatrixEnterprise`  
`VITE_FIRM=TechfolioFirm`   
`VITE_APPLICATION=AnushreeMandapeApplication` 
  16. For SofieBerkinApplication  
`VITE_CORPORATION=BeehiveCorporation`  
`VITE_ORGANISATION=TadpoleOrganisation`  
`VITE_ENTERPRISE=BellatrixEnterprise`  
`VITE_FIRM=TechfolioFirm`   
`VITE_APPLICATION=SofieBerkinApplication` 
  17. For BlogifyApplication  
`VITE_CORPORATION=BeehiveCorporation`  
`VITE_ORGANISATION=TadpoleOrganisation`  
`VITE_ENTERPRISE=BellatrixEnterprise`  
`VITE_FIRM=BlogifyFirm`   
`VITE_APPLICATION=BlogifyApplication` 
  18. For SrimadBhagwatamApplication  
`VITE_CORPORATION=BeehiveCorporation`  
`VITE_ORGANISATION=TadpoleOrganisation`  
`VITE_ENTERPRISE=BellatrixEnterprise`  
`VITE_FIRM=BlogifyFirm`   
`VITE_APPLICATION=SrimadBhagwatamApplication` 
  19. For BhagwadGitaApplication  
`VITE_CORPORATION=BeehiveCorporation`  
`VITE_ORGANISATION=TadpoleOrganisation`  
`VITE_ENTERPRISE=BellatrixEnterprise`  
`VITE_FIRM=BlogifyFirm`   
`VITE_APPLICATION=BhagwadGitaApplication` 
  20. For InterviewQuestionApplication  
`VITE_CORPORATION=BeehiveCorporation`  
`VITE_ORGANISATION=TadpoleOrganisation`  
`VITE_ENTERPRISE=BellatrixEnterprise`  
`VITE_FIRM=BlogifyFirm`   
`VITE_APPLICATION=InterviewQuestionApplication` 

- Now start the development server with the following command.
```
npm run dev
```
- We are done with the administration part.