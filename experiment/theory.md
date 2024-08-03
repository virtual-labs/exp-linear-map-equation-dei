### 1. Linear map equation:
Let T:R<sup>n</sup>→R<sup>m</sup> be a linear transformation and b&isin;R<sup>m</sup> . Then equation T(X)=b is called a linear map equation.
The linear map equation T(X)=b is called consistent if it
has a solution, i.e. if there exists X&isin;R<sup>n</sup> such that
T(X)=b. If it is not consistent, then it is called
inconsistent. Note that for X&isin;R<sup>n</sup> , X≡(x<sub>1</sub> , x<sub>2</sub> , x<sub>3</sub> , …, x<sub>n</sub> )
and T(X)&isin;R<sup>m</sup> ; where x<sub>1</sub> , x<sub>2</sub> , x<sub>3</sub> , …, x<sub>n</sub> &isin;R. For n=2,
X≡( x<sub>1</sub> , x<sub>2</sub> ) or (x, y), where x<sub>1</sub> , x<sub>2</sub> , x, y&isin;R.

### 2. Examples:
(i) Let T:R<sup>2</sup> →R<sup>3</sup> be the linear transformation defined by
T(x, y)=(x+y, x-y, 0), where x, y&isin;R. Consider the
linear map equation T(X)=b, where b=(1, 1, 0). Then
we get (x+y, x-y, 0)=(1, 1, 0). This implies that
x+y=1and x-y=1. Thus x=1 and y=0 which means that
solution of linear map equation exist. That is, linear
map equation is consistent.
(ii) Let T:R<sup>2</sup> →R<sup>3</sup> be the linear transformation defined
by T(x, y)=(x+y, 2y, 2x), where x, y&isin;R. Consider the
linear map equation T(X)=b, where b=(1, 4, 0). Then
we get (x+y, 2y, 2x)=(1, 4, 0). This implies that x+y=1,
2y=4, 2x=0. By solving equations (ii) and (iii) we get,
y=2 and x=0 which do not satisfy the (i) equation
x+y=1.This means that solution of linear map equation
does not exist. That is, linear map equation is
inconsistent.

### 3. Solutions:
Consider a linear map equation<br>
T(X)=b ……. (i)<br>
where T:R n →R m is a linear map and b&isin;R <sup>m</sup> . Note that in
particular, if b=0, then the linear map equation (i)
reduces to<br>
T(X)=0 ……. (ii)

#### 3.1. Condition for existence: 
By the definition of range T, linear map equation (i) is consistent if and only if b&isin;Range of T.  However, the linear map equation (ii) is always consistent, since T being linear T(0) =0. 
#### 3.2. Solution set: 
Assume that X<sub>o</sub> to be a solution of (i).Then the solution set, i.e. the collection of all solutions of (i) is X<sub>0</sub>+ker(T)≡ {X<sub>o</sub>+a: a&isin;ker(T)}. From 3.1, since 0 is a solution of (ii), ker(T) is its solution set.<br>
Reason: If a&isin;ker(T), then T(X<sub>o</sub>+a)=T(X<sub>o</sub>)+T(a)=b+0=0, so that X<sub>o</sub>+a is a solution the linear map equation of (i). 
Conversely, let X be a solution of (i). Then T(X)=b. Since X= X<sub>o</sub>+(X-X<sub>o</sub>) and (X-X<sub>o</sub>)&isin;ker(T),  hence X&isin;X0+ker(T).
#### 3.3 Uniqueness of solution:
(a.) Let solution of (i) exist. Then solution is unique if and only if T is one-to-one by the definition of one-to-one map.<br>
(b.) Solution of (ii) is unique if and only if T is one-to-one. [Note that solution of (ii) always exists.]
#### 3.4. Summary:
(a.) Solution of (i) may or may not exist.
(b.) Solution of (i) is unique if and only if T is one-to-one, provided solution exists.
(c.) Solution of (ii) always exists.
(d.) Solution of (ii) is unique if and only if T is one-to-one.
### 4. Remark:
#### 4.1. 
If T:R<sup>n</sup>→R<sup>m</sup> is a one-to-one linear transformation, then it does not imply that solution of (i) or (ii) exist, in general [this is shown in the example 5(ii) below]. 
#### 4.2. 
If T:R<sup>n</sup>→R<sup>m</sup>  is a one-to-one linear transformation and n=m, then T is onto and hence solution of (i) exists. Further, T being one-to-one solution is unique.
### 5. Examples:
(i) Let T:R<sup>2</sup>→R<sup>2</sup> be the linear transformation defined by T(x, y)=(y, x), where x, y&isin;R. Consider the linear map equation T(X)=b, where b=(1, 4). Then solution of linear map equation exists because b&isin;Range of T. Further the solution is unique, since T is one-to-one.
