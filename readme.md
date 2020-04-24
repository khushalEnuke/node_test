                                            SECTION - 1

1. Explain the difference between an abstract class and an interface.
Ans. Both the abstract class and interface have the same purpose i.e. abstraction, but both provide that in  completely different ways. An abstract class is basically a sub class for having all the common properties and functions that can be extended to different classes.
Eg- abstract class Employee { name(String) }
class Developer extends Employee {}
class ProjectManager extends Employee {}
So in this case there are different roles but they all are employees.
An Interface is bascially a collection of abstract methods which can be implemented on any class, thus providing complete abstraction.
the differences are
i) Since abstract class is still a class so it can have public, protected and private data whereas interface is just abstract methods so they are public
ii) a class can extend only one abstract class while it can implement multiple interfaces together.
iii) since abstract class is a class it has its constructor whereas interface doesn't have any.


2. What is the purpose of getters and setters in a class?
Ans. As the name suggests, getter lets you get a value of a class variable and setter aloows you to set the value for a class variable.
It is useful as it becomes the only entry and exit point of the variable which we can have control over, may be have validations, thus protecting our class data


                                            SECTION - 2

3. Explain the purpose of black box testing
Ans The black box testing is testing the application as a whole without knowing the inner workings or modules of the application. The benefit is that the application is tested as a whole single unit which is probably the end user perspective, thus giving all the points perspective to the user.

4. In your opinion what are the benefits of test cases
Ans Test Cases are bascially description of all the possible input and output of how the function or the module should work correctly. So writing test cases help the team to catch any mistake in our development by matching the input and output according to the correct case and pointing out error if any.

                                            SECTION - 3

5. What is an error first callback, and what is the reason for this pattern existing?
Ans. The error first callback are the callbacks in which the first argument is error and the next is data argument.
If no error exists we recieve null as the first argument. Well the reason for this argument is maybe sometimes there is no return value just the error or there are different data params, can be 2 data parmas or 3, so error will be shifted accordingly, but error is single, So The first paramter is error which was widely adoptedand became common.

6. Explain the difference between fs.readSync and fs.read (File System module in Nodejs)
Ans. fs.read accepts callback and whereas fs.readSync is a synchronous method.
The readSync method use the main node thread for the execution thus blocking any other tasks in node, whereas the fs.read function takes advantages of the asynchronous nature and works on another thread thus node can execute other tasks and when the file read completes the callback gets executed from the event queue.

7. What tasks do you feel should be done asynchronously?
Ans. The tasks that doesn't have dependencies on other tasks can be executed asynchronously.Eg- Like the previous question we use read file to avoid blocking of the main thread. Also Getting different results from different apis.
eg- Building a flight and hotel booking site, we have to get data from multiple resources, so we can take advantage of asynchronous programming and get data from both sources simultaneously and using Promise,all can perform the combining of data.


                                        SECTION - 5

e) Black box Test Scenario - passing different possible JSON inputs in input.json and generating the outputs for the same.
Eg-
Input -  
[
    {
        "id": "1ceb8c95-736f-4da3-86d9-86d55893b38a",
        "max_weight": 20,
        "contents": [
            {
                "type": "banana",
                "color": "green",
                "weight": 1.5
            },
            {
                "type": "apple",
                "color": "red",
                "weight": 1
            },
            {
                "type": "banana",
                "color": "green",
                "weight": 2.5
            }
        ]
    }
]

Output - 
[
    {
        "id": "1ceb8c95-736f-4da3-86d9-86d55893b38a",
        "total_weight": 5,
        "total_fruits": 3,
        "fruit_counts": [
            {
                "type": "banana",
                "count": 2
            },
            {
                "type": "apple",
                "count": 1
            }
        ]
    }
]

                                            SECTION - 6
f) Negative Test scenario is when an invalid json is parsed to the application.
Eg- Input - [
    {
        "id": "1ceb8c95-736f-4da3-86d9-86d55893b38a",
        "max_weight": 2,
        "contents": [
            {
                "type": "banana",
                "color": "green",
                "weight": "1.5"
            },
            {

Output - {"message":"Invalid input json"}


g) UNIT TEST CASES
1. Successful case where all data is valid as described above.
2. Invalid JSON - the json itself is incomplete or wrong, for which the output is descibed as above.
3. Some Field missing - check If the input contains any missing fields in it.
    OUTPUT - {"message":"One or more fields are missing in baskets"}
4. Some data type mismatch - check if the data type of any field is not according to provided input
    OUTPUT - {"message":"One or more data types doesn't match the required data type"}
5. Some data match the type and present but any of the weight is negative