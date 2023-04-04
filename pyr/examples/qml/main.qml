import QtQuick 2.12
import QtQuick.Controls 2.3

Rectangle {
	id: root
	width: 400
	height: 800

	property var npieces: [1, 1, 1]
	property var dirnames: ['Forward-Left Diagonal', 'Forward', 'Forward-Right Diagonal',
							'Left', 'Right', 'Back-Left Diagonal', 'Back', 'Back-Right Diagonal']

	property int currentIndex: 0
	onCurrentIndexChanged: {
		root.range = allRange[currentIndex]
		root.attack = allAttack[currentIndex]
	}

	property bool lock: false

	property var allRange: [[1, 0, 1, 0, 0, 0, 2, 0], [1, 0, 1, 0, 0, 0, 2, 0], [1, 0, 1, 0, 0, 0, 2, 0]]
	onAllRangeChanged: {
		root.range = allRange[currentIndex]
		if (lock) return;
		ohmy.text = JSON.stringify([root.allRange, root.allAttack, root.npieces])
	}
	property var allAttack: [[0, 1, 0, 0, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0]]
	onAllAttackChanged: {
		root.attack = allAttack[currentIndex]
		if (lock) return;
		ohmy.text = JSON.stringify([root.allRange, root.allAttack, root.npieces])
	}

	onNpiecesChanged: {
		if (lock) return;
		ohmy.text = JSON.stringify([root.allRange, root.allAttack, root.npieces])
	}

	property var range: allRange[currentIndex]
	property var attack: allAttack[currentIndex]

	property var rangePrices: [3, 4, 3, 2, 1, 1, 1, 2]
	property var attackPrices: [4, 5, 4, 3, 2, 2, 2, 3]
	property int totalRangePrice: allRange.map(function(range) {return range.map(function(a, i) {return a * rangePrices[i]}).reduce(function (a, b) {return a+b}, 0) })
	property int totalAttackPrice: allAttack.map(function(attack) {return attack.map(function(a, i) {return a * attackPrices[i]}).reduce(function (a, b) {return a+b}, 0) })
	property int maxRange: 3
	property var totalPrice: totalRangePrice.map(function(a, i) {return a + totalAttackPrice[i] + 10})
	property var total: totalPrice.map(function(a, i) {return root.npieces[i]*a}).reduce(function(a,b) {return a+b}, 0)

	function getIndex(dX, dY) {
		var i = (dX + 1) + 3 * (dY + 1)
		if (i > 4) return i - 1
		return i
	}
	function updateList(list, index, delta) {
		var newList = list
		newList[currentIndex][index] += delta
		if (newList[currentIndex][index] >=0 && newList[currentIndex][index] <= maxRange)
			return newList;
		newList[currentIndex][index] -= delta
		return list;
	}

	Column {
		anchors.left: parent.left
		anchors.top: parent.top
		anchors.bottom: parent.bottom
		anchors.margins: 15
		width: 400 - anchors.margins * 2
		spacing: 15

		Repeater {
			model: 3

			Column {
					anchors.left: parent.left
					anchors.right: parent.right
					spacing: 15

				Rectangle {
					color: "#cce0ff"
					anchors.left: parent.left
					anchors.right: parent.right
					height: 45

					Row {
						height: 45
						anchors.left: parent.left
						anchors.right: parent.right
						anchors.bottom: parent.bottom
						anchors.leftMargin: 20
						spacing: 20

						Button {
							text: "EDIT"
							width: 50
							visible: root.currentIndex != index
							font.family: "Open Sans"
							onClicked: root.currentIndex = index
						}

						Text {
							text: root.currentIndex == index ? "<b>PIECE "+(index+1)+"</b>" : "PIECE "+(index+1)
							anchors.verticalCenter: parent.verticalCenter
							font.family: "Open Sans"
							font.pixelSize: 15
							horizontalAlignment: Text.AlignHCenter
						}

						Button {
							text: "-"
							width: 50
							font.family: "Open Sans"
							anchors.right: second.left
							onClicked: {
								var k = root.npieces;
								if (k[index] == 0) return;
								k[index] -= 1;
								root.npieces = k;
							}
						}
						Text {
							id: second
							font.family: "Open Sans"
							text: root.npieces[index]
							width: 50
							font.pixelSize: 20
							horizontalAlignment: Text.AlignHCenter
							anchors.verticalCenter: parent.verticalCenter
							anchors.right: third.left
						}
						Button {
							id: third
							text: "+"
							width: 50
							font.family: "Open Sans"
							anchors.right: parent.right
							onClicked: {
								var k = root.npieces;
								k[index] += 1;
								root.npieces = k;
							}
						}

					}

				}

				Rectangle {
					color: "#fcdcd2"
					anchors.left: parent.left
					anchors.right: parent.right
					height: 150

					Column {

						anchors.fill: parent
						anchors.margins: 20

						Text {
								font.family: "Open Sans"
								text: "<i>Movement: </i> <b>"+root.totalRangePrice[index]+"</b> points."
								font.pixelSize: 20
						}

						Text {
								font.family: "Open Sans"
								text: "<i>Captures: </i> <b>"+root.totalAttackPrice[index]+"</b> points."
								font.pixelSize: 20
						}

						Text {
								font.family: "Open Sans"
								text: "<i>Total points: </i> <b>"+root.totalPrice[index]+"</b> points."
								font.pixelSize: 20
						}

						Text {
								font.family: "Open Sans"
								text: "Times "+root.npieces[index]+" pieces, it's <b>"+root.totalPrice[index] * root.npieces[index]+"</b> total."
								font.pixelSize: 20
						}

					}

				}

			}

		}

		Text {
				font.family: "Open Sans"
				text: "Out of <b>200</b> points, you use <b>"+root.total+"</b>.<br> That's " + (root.total > 200 ? "not okay" : "okay") + "."
				font.pixelSize: 20
		}

		Text {
			id: lastelement
			width: 370
			height: 150
			font.family: "Open Sans"
			font.pixelSize: 20
			text: "The following text field allows you to save and share a configuration - by copying it - or load an existing one by pasting."
			wrapMode: Text.WordWrap
		}

		TextEdit {
			id: ohmy
			anchors.top: lastelement.bottom
			anchors.left: parent.left
			anchors.right: parent.right
			anchors.bottom: parent.bottom
			text: JSON.stringify([root.allRange, root.allAttack, root.npieces])
			onTextChanged: {
				newEls = JSON.parse(text)
				if (newEls[0].some(function(l) {return l.some(function(k){return k<0 || k > root.maxRange})})) return;
				if (newEls[1].some(function(l) {return l.some(function(k){return k<0 || k > root.maxRange})})) return;
				root.lock = true
				root.allRange = newEls[0]
				root.allAttack = newEls[1]
				root.npieces = newEls[2]
				root.lock = false
			}
		}

	}

	Rectangle {
		anchors.fill: parent
		anchors.leftMargin: 400
		color: "#f5f5f5"
	ScrollView {
		anchors.fill: parent

		Column {

			spacing: 20
			anchors.horizontalCenter: parent.horizontalCenter
			anchors.topMargin: 20
			anchors.top: parent.top

			Grid {
				id: grid
				property int gridSize: 9
				property int center: 4
				columns: gridSize
				Repeater {
					model: grid.gridSize*grid.gridSize
					Rectangle{
						id: cell

						property int cellX: index % grid.gridSize
						property int cellY: (index - cellX) / grid.gridSize
						property int dX: cellX - grid.center
						property int dY: cellY - grid.center

						property int dist: Math.abs(dY) || Math.abs(dX)
						property bool center: dX == 0 && dY == 0
						property bool move: (Math.abs(dY) == Math.abs(dX) || dX == 0 || dY == 0) && !center
						property int direction: root.getIndex(Math.sign(dX), Math.sign(dY))
						width: 65
						height: width
						color: index % 2 ? "#b58863" : "#f0d9b5"

						Rectangle {
							anchors.centerIn: parent
							width: 18
							height: width
							radius: width*0.5
							color: "green"
							opacity: 0.5
							visible: cell.move && cell.dist <= root.range[cell.direction]
						}

						Rectangle {
							anchors.centerIn: parent
							width: 21
							height: width
							radius: width*0.5
							color: "transparent"
							opacity: 0.8
							visible: cell.move && cell.dist <= root.attack[cell.direction]
							border.width: 3
							border.color: "red"
						}

						Image {
							source: "piece1.svg"
							anchors.fill: parent
							anchors.margins: 10
							visible: cell.center
						}
					}
				}
			}

			Text {
				id: legenda
				font.family: "Open Sans"
				horizontalAlignment: Text.AlignJustify
				font.pixelSize: 17
				width: grid.width
				wrapMode: Text.WordWrap
				text: "<b>Legend</b>: the green dots indicate where the piece can move, the red rings indicate where it can capture other pieces instead. A piece that captures another will move to take its place. A piece cannot move over another unless it captures it."
			}

			Text {
				font.pixelSize: 20
				font.family: "Open Sans"
				text: "<b>MOVEMENTS</b> (total points used here: " + root.totalRangePrice[currentIndex] + ")"
				anchors.horizontalCenter: parent.horizontalCenter
			}

			Column {
				spacing: 2

				Repeater {
					model: 8

					Rectangle {
						width: grid.width
						height: 45
						color: "#cce0ff"

						Row {
							anchors.centerIn: parent
							height: 45

							Item {
								width: 20
								height: 45
							}

							Text {
								anchors.verticalCenter: parent.verticalCenter
								text: root.dirnames[index].toUpperCase()
								width: grid.width - 170
								font.pixelSize: 20
								font.family: "Open Sans"
							}
							Button {
								text: "-"
								opacity: root.range[index] > 0 ? 1 : 0
								width: 50
								onClicked: root.allRange = root.updateList(root.allRange, index, -1)
							}
							Text {
								text: root.range[index]
								width: 50
								font.family: "Open Sans"
								font.pixelSize: 20
								horizontalAlignment: Text.AlignHCenter
								anchors.verticalCenter: parent.verticalCenter
							}
							Button {
								text: "+"
								opacity: root.range[index] < root.maxRange ? 1 : 0
								width: 50
								onClicked: root.allRange = root.updateList(root.allRange, index, 1)
							}

						}

						Rectangle {
							anchors.left: parent.right
							anchors.leftMargin: 10
							height: 45
							width: 90
							color: "#fcdcd2"

							Text {
								text: "<b>" + root.rangePrices[index] * root.range[index] + "</b> Points"
								anchors.centerIn: parent
								font.family: "Open Sans"
								horizontalAlignment: Text.AlignHCenter
							}
						}

					}
				}
			}

			Text {
				font.pixelSize: 20
				font.family: "Open Sans"
				text: "<b>CAPTURES</b> (total points used here: " + root.totalAttackPrice[currentIndex] + ")"
				anchors.horizontalCenter: parent.horizontalCenter
			}

			Column {
				spacing: 2

				Repeater {
					model: 8

					Rectangle {
						width: grid.width
						height: 45
						color: "#cce0ff"

						Row {
							anchors.centerIn: parent
							height: 45

							Item {
								width: 20
								height: 45
							}

							Text {
								anchors.verticalCenter: parent.verticalCenter
								text: root.dirnames[index].toUpperCase()
								width: grid.width - 170
								font.pixelSize: 20
								font.family: "Open Sans"
							}
							Button {
								text: "-"
								width: 50
								opacity: root.attack[index] > 0 ? 1 : 0
								onClicked: root.allAttack = root.updateList(root.allAttack, index, -1)
							}
							Text {
								font.family: "Open Sans"
								text: root.attack[index]
								width: 50
								font.pixelSize: 20
								horizontalAlignment: Text.AlignHCenter
								anchors.verticalCenter: parent.verticalCenter
							}
							Button {
								text: "+"
								width: 50
								opacity: root.attack[index] < root.maxRange ? 1 : 0
								onClicked: root.allAttack = root.updateList(root.allAttack, index, 1)
							}

						}

						Rectangle {
							anchors.left: parent.right
							anchors.leftMargin: 10
							height: 45
							width: 90
							color: "#fcdcd2"

							Text {
								font.family: "Open Sans"
								text: "<b>" + root.attackPrices[index] * root.attack[index] + "</b> Points"
								anchors.centerIn: parent
								horizontalAlignment: Text.AlignHCenter
							}
						}

					}
				}
			}

			Rectangle { // Otherwise some stuff gets cut from the ScrollView
				height: 50
				width: 50
				color: "transparent"
			}

		}
	}}
}

