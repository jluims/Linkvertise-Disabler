# Linkvertise-Disabler
A project to automatically bypass linkvertise.

This program runs as a Windows service in the background.

# Installation
Make sure you have [Node.js](https://nodejs.org/en/download/) installed

Run the following commands to get started:
```
yarn build
```

```
yarn service
```

After this, make sure to trust the certificate in the cert/ folder.

1. Double click the cert.crt file in the cert folder
![screenshot](https://i.ibb.co/KWNF83n/image.png)
![screenshot](https://i.ibb.co/bKsmJkD/image.png)
2. Click install certificate
3. Make sure to click "Local Machine" under Store Location
![screenshot](https://i.ibb.co/zRm6gVd/image.png)
4. Click next then when prompted, click "Yes"
![screenshot](https://i.ibb.co/J3f43V5/image.png)
5. Click on "Place all certificates in the following store:"
6. Click on "Browse..."
7. Select "Trusted Root Certification Authorities"
![screenshot](https://i.ibb.co/GkkMvCg/image.png)
8. Click on "Next"
9. Click "Finish"

Don't worry, you're almost done!

1. Open notepad as admin
2. Click File > Open
3. Paste "C:\Windows\System32\Drivers\etc\" into the top bar
4. Click on the "hosts" file
5. Paste the following at the end of the file:
```
127.0.0.1 linkvertise.com
```

And voilà, you're done!

# Troubleshooting
## Warning when opening linkvertise
Restart your browser and try again
## How do I delete this?
Follow the hosts file instructions to delete the text you pasted in.

# Contributing
All contributions that aren't useless will be accepted. If you find any bugs or issues make an Issue. If you can code, feel free to create a PR.