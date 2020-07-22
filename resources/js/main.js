//-------------------------------------------------------------- TODO-Manager Controller

var todoController = (function(){

    // Constructor for creating an OBJECT
    var TodoMgr = function(id, desc,deadline,prName,state,imp){
        this.id =id;
        this.desc = desc;
        this.deadline = deadline;
        this.prName = prName;
        this.state = state;
        this.imp = imp;
    };
    var data = {
            alltasks: []
    };

    return{
        addTask:function(desc,deadline,prName,state,imp){
            var newTask,ID;
            //create new ID ----- access the last item in the array with lenght minus one and then read the ID and plus it one to create the newest ID
            // if the list is empty , the ID should be ZERO
           
            if (data.alltasks.length >0){
                ID = data.alltasks[data.alltasks.length-1].id + 1;
            }else{
                ID =0;
            }

            //Create new TASK as an object by passing all ITEMS into TODO constructor
            newTask = new TodoMgr (ID,desc,deadline,prName,state,imp);

            //push newTAsk into our data structure
            data.alltasks.push(newTask);
            return newTask;
        },

        test : function(){
            console.log(data);  
        }
    }

}());

//-------------------------------------------UI COuntroller

var UIController = (function(){
    var DOMstrings={
        inputDes : 'desc',
        inputDead : 'deadline',
        inputprName : 'pr-Name',
        inputState : 'state',
        inputImp :'imp',
        insertButton : 'Insert',
    };

    return {
        getInput : function() {
            return{
                 Desc : document.getElementById(DOMstrings.inputDes).value,
                 dead : document.getElementById(DOMstrings.inputDead).value,
                 prName : document.getElementById(DOMstrings.inputDead).value,
                 state : document.getElementById(DOMstrings.inputState).value,     // will be either shared or private
                 imp : document.getElementById(DOMstrings.inputImp).value
            }
        },


        addListItem : function(obj){

            var html , newHtml;
            // Create HTML String with placeholder

           html = '<ul class="list-group"><li class="list-group-item"><div class="form-check d-flex justify-content-between align-items-center"> <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"><label class="form-check-label" for="defaultCheck1">%Desc%</label><span class="ml-auto badge badge-warning ">%state%</span><small class="ml-1">%dead%</small></div></li></ul>';

            // Replace the placeholder text with some actual data
            newHtml = html.replace('%Desc%',obj.desc);
            newHtml = newHtml.replace('%state%',obj.state);
            newHtml = newHtml.replace('%dead%',obj.deadline);

            // document.querySelector('.list-group').insertAdjacentHTML('beforeend',newHtml);
            document.getElementById('v-pills-home').insertAdjacentHTML('beforeend',newHtml);
        },
        getDOMstrings : function(){
            return DOMstrings;
        }
    }
}());




//-------------------------------------------------------------------Global APP countroller
var controller = (function(TDCtrl,UICtrl){
    
    var DOM = UICtrl.getDOMstrings();
    
    var ctrAddItem = function(){
         var input, newTask;
         input = UICtrl.getInput();

         newTask = TDCtrl.addTask(input.Desc,input.dead,input.prName,input.state,input.imp);

         UICtrl.addListItem(newTask);

    };
    document.getElementById(DOM.insertButton).addEventListener('click',ctrAddItem);

    
})(todoController,UIController);
