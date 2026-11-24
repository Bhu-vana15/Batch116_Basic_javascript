let k = new Set();
k.add("hello");
k.add(123);
k.add(true);
k.add(true);
k.add("morning");
k.add(-34567);
k.add(1.236);

k.delete("hello");
console.log(k);
