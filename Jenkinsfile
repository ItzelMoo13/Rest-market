pipeline {
    agent any
    
    tools {nodejs "node"}

    stages {
        stage('Install dependecies') {
            steps {
                sh "npm install yarn" 
		sh "yarn install"
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}