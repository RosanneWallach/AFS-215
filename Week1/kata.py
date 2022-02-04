def single(num):
    if (num % 3)== 0 and (num % 5)== 0:
        return 'PepsiCoke'
    else:
        if num == 1:
            return 1
        elif num == 2:
            return 2
        elif (num % 3) == 0:
            return 'Pepsi'
        elif (num % 5) == 0:
            return'Coke'


num = int(input('Enter a number: '))
print(single(num))