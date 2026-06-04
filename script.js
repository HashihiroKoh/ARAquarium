function SardineMoving(elem, index) {
  const verticalFish = 12; // 作りたい魚の数
  const horizontalFish = 6;

  // --- ばらつき（ランダム要素）の設定 ---
  const speed = 3.5 + Math.random() * 3; // スピードに個性を出す
  let an = Math.random() * 360; // スタート位置（初期角度）をバラバラにする

  const rx = 1; // 基本のX半径
  const ry = 1; // 基本のZ半径
  // 回転の中心座標を設定
  const centerX = 0 + 0.3 * Math.floor(index / verticalFish);
  const centerY = 0 + 0.5 * (index % verticalFish);
  const centerZ = -5;
  // 上下（波打ち）の動きのパラメーター
  const waveAmplitude = 0.3; // 上下の揺れ幅（プラスマイナス30cm）
  const waveSpeed = 2; // 波打ちの速さ（数字を大きくすると細かく上下します）

  var ido = function () {
    an += speed;
    if (an >= 360 || an <= -360) {
      an = 0;
    }
    let radian = (an * Math.PI) / 180;

    const xx = centerX + Math.cos(radian) * rx;
    const zz = centerZ + Math.sin(radian) * ry;
    // 上下位置（Y軸）の計算：サイン波を使ってベースの高さから上下させる
    const yy = centerY + Math.sin(radian * waveSpeed) * waveAmplitude;
    elem.setAttribute("position", { x: xx, y: yy, z: zz });
    elem.setAttribute("rotation", {
      x: 0,
      y: -an + 180,
      z: 0,
    });
  };
  setInterval(ido, 100);
}

function AngelFishMoving(elem, index) {
  // 1. スピードに個性を出す
  const speed = 1.5 + Math.random() * 3;
  // 2. スタート位置
  let an = Math.random() * 360;
  // 3. 上下（波打ち）の揺れ幅に個性を出す
  const waveAmplitude = 0.5 + Math.random() * 0.7;
  // 4. 波打ちの速さに個性を出す
  const waveSpeed = 3 + Math.random() * 2;
  // 基本のX半径
  const rx = 5 + Math.random() * 3;
  // 基本のZ半径
  const ry = 5 + Math.random() * 3;
  // 回転の中心座標を設定
  const centerX = Math.random() * 2;
  const centerY = Math.random() * 2;
  const centerZ = 0;
  // 回転方向（時計回りor反時計回り）
  let direction;
  if (Math.random() > 0.5) {
    direction = 1;
  } else {
    direction = -1;
  }
  var angelido = function () {
    an += speed * direction;
    if (an >= 360 || an <= -360) {
      an = 0;
    }
    let radian = (an * Math.PI) / 180;

    const xx = centerX + Math.cos(radian) * rx;
    const zz = centerZ + Math.sin(radian) * ry;
    // 上下位置（Y軸）の計算：サイン波を使ってベースの高さから上下させる
    const yy = centerY + Math.sin(radian * waveSpeed) * waveAmplitude;
    elem.setAttribute("position", { x: xx, y: yy, z: zz });
    elem.setAttribute("rotation", {
      x: 0,
      y: an * direction,
      z: 0,
    });
  };
  setInterval(angelido, 100);
}
