	cmake_minimum_required(VERSION 3.7)
project(WrampToolchain)

set(CMAKE_CXX_STANDARD 17)

set(INST_FILES
    instructions.h
    object_file.h
    instructions.cpp
)

set(WASM_FILES
    assembler.cpp
)

set(WLINK_FILES
    linker.cpp
)

set(WOBJ_FILES
    objectViewer.cpp
)

# Cheap trick to pull in all .h files in the immediate folder
include_directories(
    ${CMAKE_SOURCE_DIR}
)

add_executable(wasm ${WASM_FILES} ${INST_FILES})
add_executable(wlink ${WLINK_FILES} ${INST_FILES})
add_executable(wobj ${WOBJ_FILES} ${INST_FILES})

target_link_options(wasm PRIVATE
    "SHELL:-sEXPORTED_FUNCTIONS=['_wasm']"
	"SHELL:-sEXPORTED_RUNTIME_METHODS=['ccall','cwrap','FS']"
	"SHELL:-sINVOKE_RUN=0"
	"SHELL:-sNO_EXIT_RUNTIME=1"
	"SHELL:-sMODULARIZE=1"
    "SHELL:-sEXPORT_NAME='WasmModule'"
    "SHELL:-sEXPORT_ES6=1"
)

target_link_options(wlink PRIVATE
    "SHELL:-sEXPORTED_FUNCTIONS=['_wlink']"
	"SHELL:-sEXPORTED_RUNTIME_METHODS=['ccall','cwrap','FS']"
	"SHELL:-sINVOKE_RUN=0"
	"SHELL:-sNO_EXIT_RUNTIME=1"
	"SHELL:-sMODULARIZE=1"
    "SHELL:-sEXPORT_NAME='WLinkModule'"
    "SHELL:-sEXPORT_ES6=1"
)
