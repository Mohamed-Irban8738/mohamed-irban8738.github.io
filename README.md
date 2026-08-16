# Mohamed Irban S — Portfolio

## Current version
The portfolio now highlights **StorageMind AI** as the featured live project.

### StorageMind AI
- Deployed on AWS EC2
- Web interface: port 4173
- SFTP storage connection: port 22
- Live URL: http://35.153.200.37:4173/
- Project files: linked to the provided Google Drive folder

### Security plan
The portfolio does not contain the real EC2/SFTP password. The next secure step is to create a restricted SFTP account for portfolio visitors and protect the access flow with Cloudflare Turnstile/CAPTCHA plus a small server-side access service. A CAPTCHA alone should never be used to reveal the EC2 `ubuntu` account password.