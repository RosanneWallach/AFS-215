import pytest

class testClass:
  def __init__(self):
      self.myList = []
      
  def addTest(self, test):
    self.myList.append(test)
    return self.myList
  
  def showList(self):
    print(self.myList)

  def searchList(self, test):
      for i in self.myList:
          if test == i:
              return i
          
          
          
# t1 = testClass()
# t1.addTest(1)
# t1.addTest(2)
# t1.addTest(3)
# t1.addTest(4)
# t1.addTest(5)
# t1.addTest("addingString")
# t1.showList()


@pytest.fixture
def t1():
    t1 = testClass()
    return t1

def test_callClass():
    testClass()
    
def test_addTest(t1):
    assert t1.addTest("addingString") == ["addingString"]
    
def test_showList(t1):
    print(t1.showList())
    
def test_searchList(t1):
    t1.addTest("anotherString")
    assert t1.searchList("anotherString") == "anotherString"
      
    