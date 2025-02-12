import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { createCA, createCert } from "mkcert";
// import * as fs from 'fs';


async function bootstrap() {

  // const ca = await createCA({
  //   organization: "Personal JFRP 2",
  //   countryCode: "VEN",
  //   state: "Miranda",
  //   locality: "Los Teques",
  //   validity: 365
  // });
  
  // const cert = await createCert({
  //   ca: { key: ca.key, cert: ca.cert },
  //   domains: ["127.0.0.1", "localhost"],
  //   validity: 365
  // });
  
  //console.log(cert.key, cert.cert); // certificate info
  //console.log(`${cert.cert}${ca.cert}`); 

  // console.log(cert.key);
  // console.log(cert.cert);
  // console.log(ca.cert);
  // console.log(ca.key);

  // const httpsOptions = {
  //   key: fs.readFileSync('./src/cert/key.pem'),
  //   cert: fs.readFileSync('./src/cert/cert.pem')
  // };

  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // app.enableCors({
  //   origin: [
  //     'https://localhost:3000',
  //     'https://127.0.0.1:3000',
  //   ],
  //   methods: ["GET", "POST",'DELETE','PUT'],
  //   credentials: true,
  // });

  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
