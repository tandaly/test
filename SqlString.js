function SqlString(){
    this.value = "";
    this.lineStartWith = "";//行开始值
    this.lineEndWith = "";//行结束值

    this.wrapString = function(){
        this.value = this.value.replace(/\r\n|\r|\n/g, this.lineEndWith + "\n" + this.lineStartWith);
        this.value = this.lineStartWith + this.value + this.lineEndWith;
        
        return this.value;
    }
}
