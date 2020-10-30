# Login

Login api allows user to enter username and password and login into the application.

* URL

        http://localhost:8082/apis/v1.0/auth/login or http://awshost:8082/apis/v1.0/auth/login

    Use localhost when services are deployed locally or use awshost when services are deployed in AWS server.

* Method

       POST

    Required:

        login = [String]
        password = [String]

    Optional:

        n/a

* Data Params

        n/a

* Success Response:

    What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!

        Code: 200 
        Content: 
        {
            "success": true,
            "data": {
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6InJhbWJhYnUiLCJpZCI6IjQiLCJ0aW1lIjoiMjAxOS0wNi0yMVQxODozNzo0OS4xNjBaIiwiaWF0IjoxNTYxMTQyMjY5LCJleHAiOjE1NjExNjM4Njl9.otXcy_wCrReex8WK7H8dUje1wilPj1zRyWrETPJc3WM"
            }
        }

* Error Response:

    Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be.

        Invalid Password:
        {
            "success": false,
            "message": "Authentication failed. Wrong password."
        } 

        Invalid User:
        {
            "success": false,
            "message": "Authentication failed. User not found."
        }

* Sample Call:

        curl --data "login=mahesh&pass/localhost:8082/login

* Notes:

    This is where all uncertainties, commentary, discussion etc. can go. I recommend timestamping and identifying oneself when leaving comments here.
