//===============================================
#include "GProcess.h"
//===============================================
int main(int _argc, char** _argv) {
    GProcess lProcess;
    lProcess.init();
    lProcess.run(_argc, _argv);
    lProcess.clean();
    lProcess.getLogs().print();
    return 0;
}
//===============================================
