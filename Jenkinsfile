pipeline{
  agent any
  tools {
      nodejs "node"
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
