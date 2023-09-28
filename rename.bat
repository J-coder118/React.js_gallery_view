@ECHO OFF 

@REM 遅延環境変数設定(https://blog.natade.net/2018/10/06/windows-bat-%E9%81%85%E5%BB%B6%E7%92%B0%E5%A2%83%E5%A4%89%E6%95%B0-for-if/)
setlocal EnableDelayedExpansion

@REM バッチ引数 %1 = Year
@REM バッチ引数 %2 = Month

SET IDX=0

CD C:\Users\yoake\Desktop\Github\React\cat-gallery\public\forMove

SET PATH=C:\Users\yoake\Desktop\Github\React\cat-gallery\public\%1\%2\
MD %PATH%

FOR %%F IN (*.jpg) DO (
    SET /A IDX+=1
    IF %2 lss 10 (
        IF !IDX! lss 10 (
            ECHO %%F to %1-0%2_0!IDX!.jpg
            REN "%%F" %1-0%2_0!IDX!.jpg
            MOVE %1-0%2_0!IDX!.jpg %PATH%
        ) ELSE (
            ECHO %%F to %1-0%2_!IDX!.jpg
            REN "%%F" %1-0%2_!IDX!.jpg
            MOVE %1-0%2_!IDX!.jpg %PATH%   
        )
    ) ELSE (
        IF !IDX! lss 10 (
            ECHO %%F to %1-%2_0!IDX!.jpg
            REN "%%F" %1-%2_0!IDX!.jpg
            MOVE %1-%2_0!IDX!.jpg %PATH%
        ) ELSE (
            ECHO %%F to %1-%2_!IDX!.jpg
            REN "%%F" %1-%2_!IDX!.jpg
            MOVE %1-%2_!IDX!.jpg %PATH%
        )
    )
)

CD C:\Users\yoake\Desktop\Github\React\cat-gallery