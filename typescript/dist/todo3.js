// todo3.ts
// 원격서버의 JSON 사용
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let todos3 = [];
function fetchJson() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
            throw new Error('Error : ' + response.statusText);
        }
        else {
            return yield response.json();
        }
    });
}
fetchJson()
    .then(function (response) {
    return __awaiter(this, void 0, void 0, function* () {
        todos3 = yield response;
        todos3 = todos3.map(todo3 => todo3 = { 'id': todo3.id, 'title': todo3.title, 'completed': todo3.completed }).splice(0, 5);
    });
})
    .then(() => {
    // 목록
    console.log(getTodos3());
    // 등록
    registTodo3({ 'id': 6, 'title': 'title6', 'completed': false });
    console.log(getTodos3());
    // 조회
    console.log(getTodo3(6));
    // 수정
    updateTodo3({ 'id': 6, 'title': 'up_title6', 'completed': false });
    console.log(getTodos3());
    // 삭제
    deleteTodo3(6);
    console.log(getTodos3());
});
// 목록
function getTodos3() {
    return todos3;
}
// 등록
function registTodo3(paramTodo) {
    if (!isExistedTodo3(paramTodo.id)) {
        todos3.push(paramTodo);
    }
}
// 조회
function getTodo3(paramId) {
    return (todos3.filter(todo3 => todo3.id === paramId))[0];
}
// 수정
function updateTodo3(paramTodo) {
    const id = paramTodo.id;
    if (isExistedTodo3(id)) {
        return todos3 = [...deleteTodo3(id), paramTodo];
    }
    else {
        return todos3;
    }
}
// 삭제
function deleteTodo3(paramId) {
    if (isExistedTodo3(paramId)) {
        return todos3 = todos3.filter(todo3 => todo3.id != paramId);
    }
    else {
        return todos3;
    }
}
// id 존재여부 확인
function isExistedTodo3(paramId) {
    return todos3.some(todo3 => todo3.id === paramId);
}
