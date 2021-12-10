pipeline{
    agent any 
    environment{
        VERSION = "${env.BUILD_ID}"
    }
    stages{
       
        stage("docker build & docker push"){
            steps{
                script{
                    withCredentials([string(credentialsId: 'docker_pass', variable: 'docker_password')]) {
                             sh '''
                                docker build -t deekshithsn/userapi:${VERSION} .
                                docker login -u deekshithsn -p $docker_password
                                docker push  deekshithsn/userapi:${VERSION}
                                docker rmi deekshithsn/userapi:${VERSION}
                            '''
                    }
                }
            }
        }

        stage('Deploying application on k8s cluster') {
            steps {
               script{
                   withCredentials([kubeconfigFile(credentialsId: 'kubernetes-config', variable: 'KUBECONFIG')]) {
                        
                          sh '''
                          sed -i "s,IMAGENAME,deekshithsn/userapi:${VERSION},g" user-api.yaml
                          kubectl apply -f user-api.yaml
                          ''' 
                        
                    }
               }
            }
        }

    }
}
