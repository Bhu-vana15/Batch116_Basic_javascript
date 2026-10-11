function dancerName(name : string) : void
{
    console.log(name)

}
dancerName("Vaasavi")

function dancemove(move :(name :string) => void):void
{
    move("leftjump")
}
dancemove(dancerName)