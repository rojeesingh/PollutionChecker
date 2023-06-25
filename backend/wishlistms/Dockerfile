#openjdk is docker image
FROM openjdk:11.0.14-jre
#creating working directory inside the image
WORKDIR Users/MI/Lib
#setting environment variable there in application.propeties file
ENV MONGO_DATABASE wishlistDB
ENV MONGO_URL mongodb://localhost:27017/wishlistDB
#copy executable jar file from target folder and adding in users/mi/lib  working directory
ADD ./target/wishlistms-0.0.1-SNAPSHOT.jar /Users/MI/Lib/wishlistms-0.0.1-SNAPSHOT.jar
#run jar file
ENTRYPOINT ["java","-jar","wishlistms-0.0.1-SNAPSHOT.jar"]