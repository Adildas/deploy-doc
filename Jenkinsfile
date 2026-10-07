pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                deleteDir()
                sh '''
                   git clone https://github.com/Adildas/deploy-doc.git
                   ls -l
                '''
            }
        }
        stage('deploy'){
            steps{
                sh '''
                   cp -r deploy-doc/* /var/www/html
                   ls -l /var/www/html
                  '''
            }
        }
    }
}
