// Este es un "Declarative Pipeline" de Jenkins.
// Hace lo MISMO que nuestro ci.yml de GitHub Actions, pero con la sintaxis de Jenkins.

pipeline {
    // "agent": ¿en qué máquina se ejecuta?
    //   "any" = en cualquier agente disponible de Jenkins (en nuestro caso, el propio Jenkins).
    //   Equivale al "runs-on: ubuntu-latest" de GitHub Actions.
    agent any

    // "stages": las ETAPAS del pipeline. Equivalen a los "steps" de GitHub Actions,
    //   pero en Jenkins se agrupan en etapas con nombre que verás en la interfaz web.
    stages {

        // Etapa 1: mostrar qué versión de Node hay (solo para verificar el entorno).
        stage('Verificar entorno') {
            steps {
                sh 'node --version'   // "sh" = ejecuta un comando de terminal (shell)
                sh 'npm --version'
            }
        }

        // Etapa 2: ejecutar nuestras pruebas. ¡El corazón del CI!
        stage('Pruebas') {
            steps {
                sh 'npm test'
            }
        }
    }

    // "post": acciones que ocurren AL FINAL, según cómo terminó el pipeline.
    //   Esto no tiene equivalente directo tan simple en YAML; es una ventaja de Jenkins.
    post {
        success {
            echo '✅ Todo salió bien: las pruebas pasaron.'
        }
        failure {
            echo '❌ Algo falló: revisa las pruebas.'
        }
    }
}
