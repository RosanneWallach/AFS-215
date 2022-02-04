print("Perfect Number:")
num = int(input("Please enter a number: "))

def perfect_num(num):
    list = []
    for i in range(1, num):
        if num % i == 0:
            list.append(i)
    print("Divisor of "+str(num)+": "+', '.join(map(str, list)))
    Sum = sum(list)
    print("Sum of "+', '.join(map(str, list))+" = "+str(Sum))
    if Sum == num:
        print("Sum = Original Number")
        print(str(num)+" is a Perfect Number")
    else:
        print(str(num)+" is not a Perfect Number")

perfect_num(num)