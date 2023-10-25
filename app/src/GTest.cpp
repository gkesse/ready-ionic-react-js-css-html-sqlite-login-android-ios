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
void GTest::run(int _argc, char** _argv) {
    GString lMethod = "";
    if(_argc > 2) lMethod = _argv[2];

    if(lMethod == "") {
        m_logs.addError("La méthode est obligatoire.");
    }
    else if(lMethod == "test") {
        runTest(_argc, _argv);
    }
    else if(lMethod == "base64") {
        runBase64(_argc, _argv);
    }
    else {
        m_logs.addError("La méthode est inconnue.");
    }
}
//===============================================
void GTest::runTest(int _argc, char** _argv) {
    printf("%s...\n", __PRETTY_FUNCTION__);
}
//===============================================
void GTest::runBase64(int _argc, char** _argv) {
    printf("%s...\n", __PRETTY_FUNCTION__);
    GString lData = "Bonjour tout le monde.";
    GString lData2 = lData.toBase64();
    GString lData3 = lData2.fromBase64();
    lData2.print();
    lData3.print();
}
//===============================================
