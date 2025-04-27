---
sidebar_position: 2
title: スクリーンガイド
description: Axentax Playgroundの画面構成と各ボタンの役割を解説します。初心者でも迷わず使えるように視覚的に理解できるガイドです。
keywords: [Axentax, Playground, 音楽エディター, ギター, MIDI, スクリーン構成, ボタン説明, UIガイド]
image: /img/ogp/axentax-screen-guide.png
---


import { LuPanelRightOpen } from "react-icons/lu";
import { FaPause, FaPlay } from "react-icons/fa";
import { BiArrowFromTop } from "react-icons/bi";
import { LuArrowLeftToLine } from "react-icons/lu";
import { SiCompilerexplorer } from "react-icons/si";
import { FaFileDownload } from "react-icons/fa";

import { FaFilm } from "react-icons/fa";
import { IoArrowUndo } from "react-icons/io5";
import { IoArrowRedo } from "react-icons/io5";
import { FaEraser } from "react-icons/fa";
import { MdOutlineTextDecrease } from "react-icons/md";
import { MdOutlineTextIncrease } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { VscScreenFull } from "react-icons/vsc";

# スクリーンガイド

[Playground](https://axentax.github.io/axentax-playground/)の各部位の解説です。

## 各部解説

## Playgroundの画面

![playground](/img/axe/axe-screen-1.png)

### エディター

画面中央のエディターに構文を記載します。

:::info 構文にエラーがある場合
構文にエラーがある場合、エディター下部にエラーメッセージが表示されます。\
エラーメッセージはクリックすることでエラー行にジャンプします。
:::

#### 行番号エリア
コンパイル済み状態の場合、行番号をクリックすると再生位置も連動します。

### 上部ボタン群

#### コンパイル/再生/停止ボタン

コンパイル前の状態か再生状態かによって最左ボタンが変化します。

- <SiCompilerexplorer size="20px" style={{ verticalAlign: '-0.25em' }}/> コンパイル後に再生します。
- <FaPlay size="20px" style={{ verticalAlign: '-0.25em' }}/> 再生ボタン（コンパイル済み状態）
- <FaPlay size="20px" style={{ verticalAlign: '-0.25em', color: '#ff4d00c9' }}/> 構文がエラー状態です。
- <FaPause size="20px" style={{ verticalAlign: '-0.25em' }}/> 停止状態（続きから再生します）

#### その他のボタン

- <LuArrowLeftToLine size="20px" style={{ verticalAlign: '-0.25em' }}/> 曲の先頭に戻ります。
- <BiArrowFromTop size='25px' style={{ transform: 'scaleY(-1)' }} /> 前のリージョンに移動します。※1
- <BiArrowFromTop size="20px" style={{ verticalAlign: '-0.25em' }}/> 次のリージョンに移動します。※1
- <FaFileDownload size="20px" style={{ verticalAlign: '-0.25em' }}/> MIDIファイルをダウンロードします。

> ※1 音のないリージョンは飛ばします。

### BPMと再生タイム

デジタルフォントでBPMと再生タイムが表示されます。

### プログレスバー

再生位置を示します。マウスで再生位置の変更操作ができます。

### ギター大指板

大指板を表示するには、下部ボタン群の <VscScreenFull size="20px" style={{ verticalAlign: '-0.25em' }} /> をクリックします。\
大指板にはエディターで当てたノードの指板情報が表示されます。
また、判別したスケールの所属フレットにはキーが表示されます。

### 下部ボタン群

- <FaFilm size="20px" style={{ verticalAlign: '-0.25em' }}/> 再生時のエディター追跡ON/OFF切り替え
- <IoArrowUndo size="20px" style={{ verticalAlign: '-0.25em' }} /> UNDO
- <IoArrowRedo size="20px" style={{ verticalAlign: '-0.25em' }} /> REDO
- <FaEraser size="20px" style={{ verticalAlign: '-0.25em' }} /> Editorクリア（設定行は残ります）
- <MdOutlineTextDecrease size="20px" style={{ verticalAlign: '-0.25em' }} /> フォント縮小
- <MdOutlineTextIncrease size="20px" style={{ verticalAlign: '-0.25em' }} /> フォント拡大
- <CiLight size="20px" style={{ verticalAlign: '-0.25em' }} /> Dark/Lightモード変更ボタン
- <VscScreenFull size="20px" style={{ verticalAlign: '-0.25em' }} /> 大指板の表示非表示ボタン
- <LuPanelRightOpen size="20px" style={{ verticalAlign: '-0.25em' }} /> 右サイドバー開閉

:::warning 再生時のエディター追跡はコンパイル済み状態の時のみ有効です
:::

### 右サイドバー

右サイドバーは、"下部ボタン群" の "<LuPanelRightOpen size="20px" style={{ verticalAlign: '-0.25em' }}/>" ボタンで表示非表示の切り替えができます（デフォルト非表示）

#### PLAY MONITOR

右サイドバーの3つのギター指板があるエリアです。再生時にフレーズに連動しでポジション移動します。\
再生中のノートのstepやmapの状態なども表示されます。

#### NOTE LABO

エディター・カーソル位置のノートやスタイル情報が表示されます。

:::warning エディターに記述のノート情報と異なるケース
各機能で表示されたノート情報はstepやmapでの音移動により、エディターに記述のノート情報とは異なって表示される場合がありますが、これは正常な音移動後の挙動となります（情報はstep/mapの最初の移動結果の場合があります）
:::
