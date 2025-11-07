pipeline {
    agent any
    stages {
        stage('Build In Staging') {
            when {
                expression {
                    def branch = env.GIT_BRANCH?.replaceFirst('origin/', '')
                    return branch == 'staging'
                }
            }
            steps {
                echo "Building only for staging branch..."
            }
        }
        stage('Deploy Frontend in Staging') {
            when {
                expression {
                    def branch = env.GIT_BRANCH?.replaceFirst('origin/', '')
                    return branch == 'staging'
                }
            }
            steps {
                sshagent(['fullswing-stag']) {
                    sh """
                    ssh -o StrictHostKeyChecking=no -tt ubuntu@13.56.42.221 '
                        source ~/.bash_profile
                        cd /var/www/html/fullswingsports-staging/frontend
                        git pull
                        docker build --no-cache -t stag-fullswing-sports .
                        docker stop stag-fullswing-sports || true
                        docker rm stag-fullswing-sports || true
                        docker run -d --name stag-fullswing-sports --restart=always -p 3000:3000 stag-fullswing-sports
                        docker system prune -f
                        exit
                    '
                    """
                }
            }
                                      script {

        if (currentBuild.result == "FAILURE") {
            office365ConnectorSend (
                color: "danger",
                webhookUrl: 'https://teksunmicrosyspvtltd.webhook.office.com/webhookb2/35a24f2a-cf21-425f-b596-c6310c9765c2@60068e19-cefa-42b8-b8ee-fdb874d7842e/IncomingWebhook/345f05242da74be29afd1e07f4cf1137/76423e5b-6714-4852-8e1d-215d4347c026/V2dqJeojPEtGT1Lqb6M0ahCs6_rceGj07Ec7D9iHvSdxc1',
                message: "Build FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER} (<${env.BUILD_URL}|Link to build>)"
            )
        } else {
            office365ConnectorSend (
                color: "good",
                webhookUrl: 'https://teksunmicrosyspvtltd.webhook.office.com/webhookb2/35a24f2a-cf21-425f-b596-c6310c9765c2@60068e19-cefa-42b8-b8ee-fdb874d7842e/IncomingWebhook/345f05242da74be29afd1e07f4cf1137/76423e5b-6714-4852-8e1d-215d4347c026/V2dqJeojPEtGT1Lqb6M0ahCs6_rceGj07Ec7D9iHvSdxc1',
                message: "Build SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER} (<${env.BUILD_URL}|Link to build>)"
            )
        }
    }
        }
    }
}
