pipeline {
agent any

```
stages {  
    stage('Build Frontend in Staging') {  
        when {  
            expression {  
                def branch = env.GIT_BRANCH?.replaceFirst('origin/', '')  
                return branch == 'staging'  
            }  
        }  
        steps {  
            echo "Building on branch: ${env.GIT_BRANCH}"  

            // Use Secret Text credential for GitHub token
            withCredentials([string(credentialsId: 'github-fullswing-token', variable: 'GIT_TOKEN')]) {  
                sshagent(['aws-fullswing']) {  
                    script {  
                        def status = 'SUCCESS'  
                        try {  
                            sh """  
                                ssh -o StrictHostKeyChecking=no -tt ubuntu@13.56.28.241 'source ~/.bash_profile;
                                cd /var/www/html/fullswingsports;

                                # Configure Git using token
                                git remote set-url origin https://maheshhadiya11:$GIT_TOKEN@github.com/maheshhadiya11/fullswingsports-frontend.git;
                                git fetch --all;
                                git checkout staging;
                                git pull origin staging;

                                # Docker cleanup and redeploy
                                docker stop stag-fullswing-sports || true;
                                docker rm stag-fullswing-sports || true;
                                docker rmi stag-fullswing-sports || true;
                                docker build --no-cache -t stag-fullswing-sports .;
                                docker run -d --name stag-fullswing-sports --restart=always -p 3000:3000 stag-fullswing-sports;
                                docker system prune -f;

                                exit;'  
                            """  
                        } catch (Exception e) {  
                            status = 'FAILURE'  
                            error("Deployment failed!")  
                        } finally {  
                            echo "Build ${status}: ${env.JOB_NAME} #${env.BUILD_NUMBER}"  
                        }  
                    }  
                }  
            }  
        }  
    }  
}  

post {  
    always {  
        cleanWs()  
        dir("${env.WORKSPACE}@tmp") { deleteDir() }  
        dir("${env.WORKSPACE}@script") { deleteDir() }  
        dir("${env.WORKSPACE}@script@tmp") { deleteDir() }  
    }  
}  
```

}
