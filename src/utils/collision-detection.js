const Superquad = require('superquad');
// 定义容器边界
const dimensions = {
  width: 1024,
  height: 768,
};
// 创建碰撞检测对象
const superquad = new Superquad(dimensions);
// 添加已存在元素
superquad.add({
  x: 150, y: 200, width: 50, height: 75, id: 2,
});
superquad.add({
  x: 200, y: 200, width: 50, height: 50,
});

// 与目标元素进行碰撞检测
const possibleCollisions = superquad.getIntersections({
  x: 0, y: 0, width: 1000, height: 1000,
});

// 打印出重叠元素
console.log(possibleCollisions);
