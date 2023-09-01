function calc()
{
    var n1 = parseFloat(document.getElementById('n1').value);
    
    var oper = document.getElementById('Gold-Karat').value;
    
    if(oper === '145190')
    {
        document.getElementById('result').value = (145190/8)*n1;
    }
    
    if(oper === '150650')
    {
        document.getElementById('result').value = (150650/8)*n1;
    }
    
    if(oper === '157850')
    {
        document.getElementById('result').value = (157850/8)*n1;
    }
    
    if(oper === '172150')
    {
        document.getElementById('result').value = (172150/8)*n1;
    }
}