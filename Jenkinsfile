pipeline {
    agent any

    stages {
        stage('Build In Staging') {
            steps {
                sshagent(['aws-fullswing-ec2']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no -tt ubuntu@13.56.28.241 << 'EOF'
                            source ~/.bash_profile
                            cd /var/www/html/fullswingsports
                            git pull
                            docker build --no-cache -t stag-fullswing-sports .
                            docker stop stag-fullswing-sports || true
                            docker rm stag-fullswing-sports || true
                            docker run -d --name stag-fullswing-sports --restart=always -p 3000:3000 stag-fullswing-sports
                            docker system prune -f
                        EOF
                    '''
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
}
