pipeline{
  agent {
        docker {
            image 'node:latest'
            args '-p 3000:3000'
        }
    }
//   tools {
//       nodejs "node"
//   }
  environment {
            CI = 'true'
        }
  stages{
    stage('Build'){
      steps{
        sh 'npm install'
      }
    }
    stage('Deliver'){
      steps{
        sh 'set -x'
        sh 'npm start &'
        sh 'sleep 1'
        sh 'echo $! > .pidfile'
        sh 'set +x'
      }
    } 
  }
}
