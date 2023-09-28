import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SvgIcon from '@material-ui/core/SvgIcon';

import _2013 from '../config/gallery/2013.json'
import _2014 from '../config/gallery/2014.json'
import _2015 from '../config/gallery/2015.json'
import _2016 from '../config/gallery/2016.json'
import _2017 from '../config/gallery/2017.json'
import _2018 from '../config/gallery/2018.json'
import _2019 from '../config/gallery/2019.json'
import _2020 from '../config/gallery/2020.json'
import _2021 from '../config/gallery/2021.json'

const CardItems = ({ card, year, allPhotoShow }) => {

    // 「1-9」 -> 「01-09」 に変換する
    const returnZeroIdx = (idx) => (idx < 10 ? '0' + String(idx) : String(idx))

    // 一致する月の表示状況stateをphotoShowに設定
    let photoShow = false
    allPhotoShow.forEach(monthShow => { if (monthShow[card.id]) photoShow = monthShow[card.id] })
    
    // 表示するカード数を設定
    let cardNum = 3
    if (photoShow) cardNum = card.itemNum

    // コンポーネント作成
    const Cards = []
    for (let idx = 1; idx <= cardNum; idx++) {

        // ファイル名設定
        const fileName = `${String(year)}-${returnZeroIdx(card.id)}_${returnZeroIdx(idx)}.jpg`

        // コンポーネントを配列に追加
        Cards.push(
            <Card
                key={`${ card.month }_${ idx }`}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    m: '10px',
                    animation: '1s fadein',
                    width: '300px',
                }}
            >
                {/* 画像 */}
                    <CardMedia
                        component="img"
                        image={`/${year}/${card.id}/${ fileName }`}
                        alt={ card.title.default ? card.title.name[0] : card.title.name[idx] }
                        sx={{
                            width: '100%',
                            height: 'auto', maxHeight: '300px'
                        }}
                        loading="lazy"
                    />
                {/* 画像 */}

                {/* コンテンツ */}
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography
                            component="h2"
                            variant="h5"
                            gutterBottom
                        >
                            { card.title.default ? card.title.name[0] : card.title.name[idx] } { card.title.index && idx }
                        </Typography>
                        <Typography>
                            { card.content.default ? card.content.name[0] : card.content.name[idx] } { card.content.index && idx }
                        </Typography>
                    </CardContent>
                {/* コンテンツ */}

                {/* 画像リンクボタン */}
                    <CardActions>
                        <Button
                            size="small"
                            href={`/image/${year}/${card.id}/${ fileName }`}
                        >
                            View
                        </Button>
                    </CardActions>
                {/* 画像リンクボタン */}

            </Card>
        )
    }
    return Cards
}

const Gallery = () => {

    // state設定
    const [path, setPath] = useState('')
    const [januaryShow, setJanuaryShow] = useState(false)
    const [februaryShow, setFebruaryShow] = useState(false)
    const [marchShow, setMarchShow] = useState(false)
    const [aprilShow, setAprilShow] = useState(false)
    const [mayShow, setMayShow] = useState(false)
    const [juneShow, setJuneShow] = useState(false)
    const [julyShow, setJulyShow] = useState(false)
    const [augustShow, setAugustShow] = useState(false)
    const [septemberShow, setSeptemberShow] = useState(false)
    const [octoberShow, setOctoberShow] = useState(false)
    const [novemberShow, setNovemberShow] = useState(false)
    const [decemberShow, setDecemberShow] = useState(false)

    // パス設定
    const splitPath = path.split('/')
    const year = splitPath[2]

    // 全月のコンテンツ表示状態を配列化
    const allPhotoShow = [
        {'1': januaryShow}, {'2': februaryShow}, {'3': marchShow},
        {'4': aprilShow}, {'5': mayShow}, {'6': juneShow},
        {'7': julyShow}, {'8': augustShow}, {'9': septemberShow},
        {'10': octoberShow}, {'11': novemberShow}, {'12': decemberShow},
    ]

    // 表示する年次を設定
    let gallerys = []
    switch(year) {
        case '2013': gallerys = _2013; break
        case '2014': gallerys = _2014; break
        case '2015': gallerys = _2015; break
        case '2016': gallerys = _2016; break
        case '2017': gallerys = _2017; break
        case '2018': gallerys = _2018; break
        case '2019': gallerys = _2019; break
        case '2020': gallerys = _2020; break
        case '2021': gallerys = _2021; break
        default: gallerys = _2013; break
    }

    // 月ごとの表示状況を管理
    const setState = (cond, value) => {
        switch(cond) {
            case '1': setJanuaryShow(value); break
            case '2': setFebruaryShow(value); break
            case '3': setMarchShow(value); break
            case '4': setAprilShow(value); break
            case '5': setMayShow(value); break
            case '6': setJuneShow(value); break
            case '7': setJulyShow(value); break
            case '8': setAugustShow(value); break
            case '9': setSeptemberShow(value); break
            case '10': setOctoberShow(value); break
            case '11': setNovemberShow(value); break
            case '12': setDecemberShow(value); break
            default: setJanuaryShow(value); break
        }
    }

    useEffect(() => {
        setPath(window.location.pathname)
    }, [path])

    return gallerys ? (
        <Container sx={{ mt: '40px' }}>
            {gallerys.map((card, idx) => (

                <React.Fragment key={`${ card.month }${ idx }`}>

                    {/* 月次タイトル */}
                        <Typography
                            component="h1"
                            variant="h4"
                            gutterBottom
                            id={card.month}
                            sx={{ borderBottom: '1px solid black', pb: '5px' }}
                        >
                            <SvgIcon sx={{ mr: '10px' }}>
                                <path fill="currentColor" d="M6,19L9,15.14L11.14,17.72L14.14,13.86L18,19H6M6,4H11V12L8.5,10.5L6,12M18,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2Z" />
                            </SvgIcon>
                            { card.month }
                        </Typography>
                    {/* 月次タイトル */}

                    {/* 展開画像Closeボタン */}
                        {(allPhotoShow[Number(card.id) - 1][card.id]) && (
                            <Button
                                variant="contained"
                                sx={{ ml: '20px' }}
                                onClick={() => setState(card.id, false)}
                            >
                                Close
                            </Button>
                        )}
                    {/* 展開画像Closeボタン */}

                    {/* 月単位カードコンテナ */}
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-around',
                                mb: '40px', mt: '15px', p: '10px',
                                backgroundColor: 'rgb(245, 245, 245)'
                            }}
                        >
                            {/* 月単位カードアイテム（複数） */}
                                <CardItems
                                    card={card}
                                    year={year}
                                    allPhotoShow={allPhotoShow}
                                />
                            {/* 月単位カードアイテム（複数） */}

                            {/* 画像展開ボタン */}
                                {(!allPhotoShow[Number(card.id) - 1][card.id]) && (
                                    <Button
                                        variant="contained"
                                        sx={{
                                            height: '50px',
                                            m: '20px',
                                            width: '300px'
                                        }}
                                        onClick={() => setState(card.id, true)}
                                    >
                                        View More
                                    </Button>
                                )}
                            {/* 画像展開ボタン */}

                        </Card>
                    {/* 月単位カードコンテナ */}

                </React.Fragment>

            ))}
        </Container>
    ) : (
        <Container
            sx={{ mt: '40px' }}
            align="center"
        >
            <Typography
                component="h2"
                variant="h5"
                gutterBottom
            >
                No Data
            </Typography>
        </Container>
    )
}

export default Gallery
