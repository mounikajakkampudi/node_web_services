# Commands

Search Port

    lsof -i tcp:8082

Kill Port

    kill -9 [portnumber]

Permissions    

    chmod 400 extras/zoomsi.pem
    chmod 777 extras/zoomsi.sh

Upload Build

    rsync -aPSHiv -e  "ssh -i extras/zomsi.pem" . --exclude "node_modules/*"  ec2-user@ec2-13-57-233-7.us-west-1.compute.amazonaws.com:~/zomsi/auth/

Download

    rsync -azvv -e  "ssh -i /extras/zomsi.pem" --exclude "node_modules/*"  ec2-user@ec2-13-57-233-7.us-west-1.compute.amazonaws.com:~/zomsi/auth/ /temp/