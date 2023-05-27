/* Write a procedure to update salary in emp table based on following rules.
Exp< =35 then no Update
Exp> 35 and <=38 then 20% of salary
Exp> 38 then 25% of salary */



Delimiter //
create procedure up_sal()
Begin
Declare finish int default 0;
Declare vempno,vdeptno,vmgr int;
Declare vename,vjob varchar(20);
Declare vhiredate date;
Declare vsal,nsal,vcomm double(9,2);
Declare Exp int;
Declare emp_cur cursor for select * from emp;
Declare continue handler for NOT FOUND set finish =1;
open emp_cur;
l1 : loop
fetch emp_cur into vempno,vename,vjob,vmgr,vhiredate,vsal,vcomm,vdeptno;
if finish =1 then
leave l1;
end if;
Set Exp = floor(datediff(curdate(),vhiredate)/365);
if Exp <= 35 then 
 select vsal;
elseif Exp <=38 then
update emp
set sal = 1.2 * vsal
where empno=vempno;
else
update emp
set sal = 1.25 * vsal
where empno=vempno;
end if;
select sal into nsal from emp where empno=vempno;
select vempno,vename,vjob,vhiredate,Exp, nsal;
end loop;
close emp_cur;

End //
Delimiter ;
