# Login

Login api allows user to enter username and password and login into the application.

* URL

        http://localhost:8082/apis/v1.0/auth/register or http://awshost:8082/apis/v1.0/auth/register

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
        }

* Error Response:

    Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be.

        Invalid User:
        {
            "success": false,
            "message": "Registration failed. User with this email already registered."
        } 

* Sample Call:

        curl --data "login=mahesh&pass/localhost:8082/register

* Notes:

    This is where all uncertainties, commentary, discussion etc. can go. I recommend timestamping and identifying oneself when leaving comments here.
