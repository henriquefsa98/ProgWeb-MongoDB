import { updateLanguageServiceSourceFile } from "typescript";

class ToDoItem {
    id: number;
    description: string;
    tags: string[]
    deadline: string

    constructor(description: string) {
        this.id = 0;
        this.description = description;
        this.tags = [];
        this.deadline = '';
    }

}


class ToDoItemDao {
    insert(item: ToDoItem) {

    }

    list() {

    }

    findById(id: number){}

    updateItem(item: ToDoItem){}

    deleteById(id: number){}


}