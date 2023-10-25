//===============================================
#include "GTest.h"
//===============================================
GTest::GTest()
: GObject() {

}
//===============================================
GTest::~GTest() {

}
//===============================================
void GTest::run(int _argc, char** _argv, char** _envs) {
    GString lMethod = "";
    if(_argc > 2) lMethod = _argv[2];

    if(lMethod == "") {
        m_logs.addError("La méthode est obligatoire.");
    }
    else if(lMethod == "test") {
        runTest(_argc, _argv, _envs);
    }
    else if(lMethod == "base64") {
        runBase64(_argc, _argv, _envs);
    }
    else if(lMethod == "sleep") {
        runSleep(_argc, _argv, _envs);
    }
    else if(lMethod == "envs") {
        runEnvs(_argc, _argv, _envs);
    }
    else {
        m_logs.addError("La méthode est inconnue.");
    }
}
//===============================================
void GTest::runTest(int _argc, char** _argv, char** _envs) {
    printf("%s...\n", __PRETTY_FUNCTION__);
}
//===============================================
void GTest::runBase64(int _argc, char** _argv, char** _envs) {
    printf("%s...\n", __PRETTY_FUNCTION__);
    GString lData = "Bonjour tout le monde.";
    GString lData2 = lData.toBase64();
    GString lData3 = lData2.fromBase64();
    lData2.print();
    lData3.print();
}
//===============================================
void GTest::runSleep(int _argc, char** _argv, char** _envs) {
    printf("%s...\n", __PRETTY_FUNCTION__);
    for(int i = 0; i < 50; i++) {
        printf("Bonjour RaspberryPi...\n");
        sleep(5);
    }
}
//===============================================
void GTest::runEnvs(int _argc, char** _argv, char** _envs) {
    printf("%s...\n", __PRETTY_FUNCTION__);
    GString lAction = "0";
    if(_argc > 3) lAction = _argv[3];

    if(lAction == "0") {
        for(char** lEnv = _envs; *lEnv != 0; lEnv++){
            printf("%s\n", *lEnv);
        }
    }
    else if(lAction == "1") {
        printf("%s\n", *getenv("ENV_TYPE"));
    }
}
//===============================================
