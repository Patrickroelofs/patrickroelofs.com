import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_footer_social_links_icon" AS ENUM('Acorn', 'AddressBook', 'AddressBookTabs', 'AirTrafficControl', 'Airplane', 'AirplaneInFlight', 'AirplaneLanding', 'AirplaneTakeoff', 'AirplaneTaxiing', 'AirplaneTilt', 'Airplay', 'Alarm', 'Alien', 'AlignBottom', 'AlignBottomSimple', 'AlignCenterHorizontal', 'AlignCenterHorizontalSimple', 'AlignCenterVertical', 'AlignCenterVerticalSimple', 'AlignLeft', 'AlignLeftSimple', 'AlignRight', 'AlignRightSimple', 'AlignTop', 'AlignTopSimple', 'AmazonLogo', 'Ambulance', 'Anchor', 'AnchorSimple', 'AndroidLogo', 'Angle', 'AngularLogo', 'Aperture', 'AppStoreLogo', 'AppWindow', 'AppleLogo', 'ApplePodcastsLogo', 'ApproximateEquals', 'Archive', 'Armchair', 'ArrowArcLeft', 'ArrowArcRight', 'ArrowBendDoubleUpLeft', 'ArrowBendDoubleUpRight', 'ArrowBendDownLeft', 'ArrowBendDownRight', 'ArrowBendLeftDown', 'ArrowBendLeftUp', 'ArrowBendRightDown', 'ArrowBendRightUp', 'ArrowBendUpLeft', 'ArrowBendUpRight', 'ArrowCircleDown', 'ArrowCircleDownLeft', 'ArrowCircleDownRight', 'ArrowCircleLeft', 'ArrowCircleRight', 'ArrowCircleUp', 'ArrowCircleUpLeft', 'ArrowCircleUpRight', 'ArrowClockwise', 'ArrowCounterClockwise', 'ArrowDown', 'ArrowDownLeft', 'ArrowDownRight', 'ArrowElbowDownLeft', 'ArrowElbowDownRight', 'ArrowElbowLeft', 'ArrowElbowLeftDown', 'ArrowElbowLeftUp', 'ArrowElbowRight', 'ArrowElbowRightDown', 'ArrowElbowRightUp', 'ArrowElbowUpLeft', 'ArrowElbowUpRight', 'ArrowFatDown', 'ArrowFatLeft', 'ArrowFatLineDown', 'ArrowFatLineLeft', 'ArrowFatLineRight', 'ArrowFatLineUp', 'ArrowFatLinesDown', 'ArrowFatLinesLeft', 'ArrowFatLinesRight', 'ArrowFatLinesUp', 'ArrowFatRight', 'ArrowFatUp', 'ArrowLeft', 'ArrowLineDown', 'ArrowLineDownLeft', 'ArrowLineDownRight', 'ArrowLineLeft', 'ArrowLineRight', 'ArrowLineUp', 'ArrowLineUpLeft', 'ArrowLineUpRight', 'ArrowRight', 'ArrowSquareDown', 'ArrowSquareDownLeft', 'ArrowSquareDownRight', 'ArrowSquareIn', 'ArrowSquareLeft', 'ArrowSquareOut', 'ArrowSquareRight', 'ArrowSquareUp', 'ArrowSquareUpLeft', 'ArrowSquareUpRight', 'ArrowUDownLeft', 'ArrowUDownRight', 'ArrowULeftDown', 'ArrowULeftUp', 'ArrowURightDown', 'ArrowURightUp', 'ArrowUUpLeft', 'ArrowUUpRight', 'ArrowUp', 'ArrowUpLeft', 'ArrowUpRight', 'ArrowsClockwise', 'ArrowsCounterClockwise', 'ArrowsDownUp', 'ArrowsHorizontal', 'ArrowsIn', 'ArrowsInCardinal', 'ArrowsInLineHorizontal', 'ArrowsInLineVertical', 'ArrowsInSimple', 'ArrowsLeftRight', 'ArrowsMerge', 'ArrowsOut', 'ArrowsOutCardinal', 'ArrowsOutLineHorizontal', 'ArrowsOutLineVertical', 'ArrowsOutSimple', 'ArrowsSplit', 'ArrowsVertical', 'Article', 'ArticleMedium', 'ArticleNyTimes', 'Asclepius', 'Asterisk', 'AsteriskSimple', 'At', 'Atom', 'Avocado', 'Axe', 'Baby', 'BabyCarriage', 'Backpack', 'Backspace', 'Bag', 'BagSimple', 'Balloon', 'Bandaids', 'Bank', 'Barbell', 'Barcode', 'Barn', 'Barricade', 'Baseball', 'BaseballCap', 'BaseballHelmet', 'Basket', 'Basketball', 'Bathtub', 'BatteryCharging', 'BatteryChargingVertical', 'BatteryEmpty', 'BatteryFull', 'BatteryHigh', 'BatteryLow', 'BatteryMedium', 'BatteryPlus', 'BatteryPlusVertical', 'BatteryVerticalEmpty', 'BatteryVerticalFull', 'BatteryVerticalHigh', 'BatteryVerticalLow', 'BatteryVerticalMedium', 'BatteryWarning', 'BatteryWarningVertical', 'BeachBall', 'Beanie', 'Bed', 'BeerBottle', 'BeerStein', 'BehanceLogo', 'Bell', 'BellRinging', 'BellSimple', 'BellSimpleRinging', 'BellSimpleSlash', 'BellSimpleZ', 'BellSlash', 'BellZ', 'Belt', 'BezierCurve', 'Bicycle', 'Binary', 'Binoculars', 'Biohazard', 'Bird', 'Blueprint', 'Bluetooth', 'BluetoothConnected', 'BluetoothSlash', 'BluetoothX', 'Boat', 'Bomb', 'Bone', 'Book', 'BookBookmark', 'BookOpen', 'BookOpenText', 'BookOpenUser', 'Bookmark', 'BookmarkSimple', 'Bookmarks', 'BookmarksSimple', 'Books', 'Boot', 'Boules', 'BoundingBox', 'BowlFood', 'BowlSteam', 'BowlingBall', 'BoxArrowDown', 'BoxArrowUp', 'BoxingGlove', 'BracketsAngle', 'BracketsCurly', 'BracketsRound', 'BracketsSquare', 'Brain', 'Brandy', 'Bread', 'Bridge', 'Briefcase', 'BriefcaseMetal', 'Broadcast', 'Broom', 'Browser', 'Browsers', 'Bug', 'BugBeetle', 'BugDroid', 'Building', 'BuildingApartment', 'BuildingOffice', 'Buildings', 'Bulldozer', 'Bus', 'Butterfly', 'CableCar', 'Cactus', 'Cake', 'Calculator', 'Calendar', 'CalendarBlank', 'CalendarCheck', 'CalendarDot', 'CalendarDots', 'CalendarHeart', 'CalendarMinus', 'CalendarPlus', 'CalendarSlash', 'CalendarStar', 'CalendarX', 'CallBell', 'Camera', 'CameraPlus', 'CameraRotate', 'CameraSlash', 'Campfire', 'Car', 'CarBattery', 'CarProfile', 'CarSimple', 'Cardholder', 'Cards', 'CardsThree', 'CaretCircleDoubleDown', 'CaretCircleDoubleLeft', 'CaretCircleDoubleRight', 'CaretCircleDoubleUp', 'CaretCircleDown', 'CaretCircleLeft', 'CaretCircleRight', 'CaretCircleUp', 'CaretCircleUpDown', 'CaretDoubleDown', 'CaretDoubleLeft', 'CaretDoubleRight', 'CaretDoubleUp', 'CaretDown', 'CaretLeft', 'CaretLineDown', 'CaretLineLeft', 'CaretLineRight', 'CaretLineUp', 'CaretRight', 'CaretUp', 'CaretUpDown', 'Carrot', 'CashRegister', 'CassetteTape', 'CastleTurret', 'Cat', 'CellSignalFull', 'CellSignalHigh', 'CellSignalLow', 'CellSignalMedium', 'CellSignalNone', 'CellSignalSlash', 'CellSignalX', 'CellTower', 'Certificate', 'Chair', 'Chalkboard', 'ChalkboardSimple', 'ChalkboardTeacher', 'Champagne', 'ChargingStation', 'ChartBar', 'ChartBarHorizontal', 'ChartDonut', 'ChartLine', 'ChartLineDown', 'ChartLineUp', 'ChartPie', 'ChartPieSlice', 'ChartPolar', 'ChartScatter', 'Chat', 'ChatCentered', 'ChatCenteredDots', 'ChatCenteredSlash', 'ChatCenteredText', 'ChatCircle', 'ChatCircleDots', 'ChatCircleSlash', 'ChatCircleText', 'ChatDots', 'ChatSlash', 'ChatTeardrop', 'ChatTeardropDots', 'ChatTeardropSlash', 'ChatTeardropText', 'ChatText', 'Chats', 'ChatsCircle', 'ChatsTeardrop', 'Check', 'CheckCircle', 'CheckFat', 'CheckSquare', 'CheckSquareOffset', 'Checkerboard', 'Checks', 'Cheers', 'Cheese', 'ChefHat', 'Cherries', 'Church', 'Cigarette', 'CigaretteSlash', 'Circle', 'CircleDashed', 'CircleHalf', 'CircleHalfTilt', 'CircleNotch', 'CirclesFour', 'CirclesThree', 'CirclesThreePlus', 'Circuitry', 'City', 'Clipboard', 'ClipboardText', 'Clock', 'ClockAfternoon', 'ClockClockwise', 'ClockCountdown', 'ClockCounterClockwise', 'ClockUser', 'ClosedCaptioning', 'Cloud', 'CloudArrowDown', 'CloudArrowUp', 'CloudCheck', 'CloudFog', 'CloudLightning', 'CloudMoon', 'CloudRain', 'CloudSlash', 'CloudSnow', 'CloudSun', 'CloudWarning', 'CloudX', 'Clover', 'Club', 'CoatHanger', 'CodaLogo', 'Code', 'CodeBlock', 'CodeSimple', 'CodepenLogo', 'CodesandboxLogo', 'Coffee', 'CoffeeBean', 'Coin', 'CoinVertical', 'Coins', 'Columns', 'ColumnsPlusLeft', 'ColumnsPlusRight', 'Command', 'Compass', 'CompassRose', 'CompassTool', 'ComputerTower', 'Confetti', 'ContactlessPayment', 'Control', 'Cookie', 'CookingPot', 'Copy', 'CopySimple', 'Copyleft', 'Copyright', 'CornersIn', 'CornersOut', 'Couch', 'CourtBasketball', 'Cow', 'CowboyHat', 'Cpu', 'Crane', 'CraneTower', 'CreditCard', 'Cricket', 'Crop', 'Cross', 'Crosshair', 'CrosshairSimple', 'Crown', 'CrownCross', 'CrownSimple', 'Cube', 'CubeFocus', 'CubeTransparent', 'CurrencyBtc', 'CurrencyCircleDollar', 'CurrencyCny', 'CurrencyDollar', 'CurrencyDollarSimple', 'CurrencyEth', 'CurrencyEur', 'CurrencyGbp', 'CurrencyInr', 'CurrencyJpy', 'CurrencyKrw', 'CurrencyKzt', 'CurrencyNgn', 'CurrencyRub', 'Cursor', 'CursorClick', 'CursorText', 'Cylinder', 'Database', 'Desk', 'Desktop', 'DesktopTower', 'Detective', 'DevToLogo', 'DeviceMobile', 'DeviceMobileCamera', 'DeviceMobileSlash', 'DeviceMobileSpeaker', 'DeviceRotate', 'DeviceTablet', 'DeviceTabletCamera', 'DeviceTabletSpeaker', 'Devices', 'Diamond', 'DiamondsFour', 'DiceFive', 'DiceFour', 'DiceOne', 'DiceSix', 'DiceThree', 'DiceTwo', 'Disc', 'DiscoBall', 'DiscordLogo', 'Divide', 'Dna', 'Dog', 'Door', 'DoorOpen', 'Dot', 'DotOutline', 'DotsNine', 'DotsSix', 'DotsSixVertical', 'DotsThree', 'DotsThreeCircle', 'DotsThreeCircleVertical', 'DotsThreeOutline', 'DotsThreeOutlineVertical', 'DotsThreeVertical', 'Download', 'DownloadSimple', 'Dress', 'Dresser', 'DribbbleLogo', 'Drone', 'Drop', 'DropHalf', 'DropHalfBottom', 'DropSimple', 'DropSlash', 'DropboxLogo', 'Ear', 'EarSlash', 'Egg', 'EggCrack', 'Eject', 'EjectSimple', 'Elevator', 'Empty', 'Engine', 'Envelope', 'EnvelopeOpen', 'EnvelopeSimple', 'EnvelopeSimpleOpen', 'Equalizer', 'Equals', 'Eraser', 'EscalatorDown', 'EscalatorUp', 'Exam', 'ExclamationMark', 'Exclude', 'ExcludeSquare', 'Export', 'Eye', 'EyeClosed', 'EyeSlash', 'Eyedropper', 'EyedropperSample', 'Eyeglasses', 'Eyes', 'FaceMask', 'FacebookLogo', 'Factory', 'Faders', 'FadersHorizontal', 'FalloutShelter', 'Fan', 'Farm', 'FastForward', 'FastForwardCircle', 'Feather', 'FediverseLogo', 'FigmaLogo', 'File', 'FileArchive', 'FileArrowDown', 'FileArrowUp', 'FileAudio', 'FileC', 'FileCSharp', 'FileCloud', 'FileCode', 'FileCpp', 'FileCss', 'FileCsv', 'FileDashed', 'FileDoc', 'FileHtml', 'FileImage', 'FileIni', 'FileJpg', 'FileJs', 'FileJsx', 'FileLock', 'FileMagnifyingGlass', 'FileMd', 'FileMinus', 'FilePdf', 'FilePlus', 'FilePng', 'FilePpt', 'FilePy', 'FileRs', 'FileSql', 'FileSvg', 'FileText', 'FileTs', 'FileTsx', 'FileTxt', 'FileVideo', 'FileVue', 'FileX', 'FileXls', 'FileZip', 'Files', 'FilmReel', 'FilmScript', 'FilmSlate', 'FilmStrip', 'Fingerprint', 'FingerprintSimple', 'FinnTheHuman', 'Fire', 'FireExtinguisher', 'FireSimple', 'FireTruck', 'FirstAid', 'FirstAidKit', 'Fish', 'FishSimple', 'Flag', 'FlagBanner', 'FlagBannerFold', 'FlagCheckered', 'FlagPennant', 'Flame', 'Flashlight', 'Flask', 'FlipHorizontal', 'FlipVertical', 'FloppyDisk', 'FloppyDiskBack', 'FlowArrow', 'Flower', 'FlowerLotus', 'FlowerTulip', 'FlyingSaucer', 'Folder', 'FolderDashed', 'FolderLock', 'FolderMinus', 'FolderOpen', 'FolderPlus', 'FolderSimple', 'FolderSimpleDashed', 'FolderSimpleLock', 'FolderSimpleMinus', 'FolderSimplePlus', 'FolderSimpleStar', 'FolderSimpleUser', 'FolderStar', 'FolderUser', 'Folders', 'Football', 'FootballHelmet', 'Footprints', 'ForkKnife', 'FourK', 'FrameCorners', 'FramerLogo', 'Function', 'Funnel', 'FunnelSimple', 'FunnelSimpleX', 'FunnelX', 'GameController', 'Garage', 'GasCan', 'GasPump', 'Gauge', 'Gavel', 'Gear', 'GearFine', 'GearSix', 'GenderFemale', 'GenderIntersex', 'GenderMale', 'GenderNeuter', 'GenderNonbinary', 'GenderTransgender', 'Ghost', 'Gif', 'Gift', 'GitBranch', 'GitCommit', 'GitDiff', 'GitFork', 'GitMerge', 'GitPullRequest', 'GithubLogo', 'GitlabLogo', 'GitlabLogoSimple', 'Globe', 'GlobeHemisphereEast', 'GlobeHemisphereWest', 'GlobeSimple', 'GlobeSimpleX', 'GlobeStand', 'GlobeX', 'Goggles', 'Golf', 'GoodreadsLogo', 'GoogleCardboardLogo', 'GoogleChromeLogo', 'GoogleDriveLogo', 'GoogleLogo', 'GooglePhotosLogo', 'GooglePlayLogo', 'GooglePodcastsLogo', 'Gps', 'GpsFix', 'GpsSlash', 'Gradient', 'GraduationCap', 'Grains', 'GrainsSlash', 'Graph', 'GraphicsCard', 'GreaterThan', 'GreaterThanOrEqual', 'GridFour', 'GridNine', 'Guitar', 'HairDryer', 'Hamburger', 'Hammer', 'Hand', 'HandArrowDown', 'HandArrowUp', 'HandCoins', 'HandDeposit', 'HandEye', 'HandFist', 'HandGrabbing', 'HandHeart', 'HandPalm', 'HandPeace', 'HandPointing', 'HandSoap', 'HandSwipeLeft', 'HandSwipeRight', 'HandTap', 'HandWaving', 'HandWithdraw', 'Handbag', 'HandbagSimple', 'HandsClapping', 'HandsPraying', 'Handshake', 'HardDrive', 'HardDrives', 'HardHat', 'Hash', 'HashStraight', 'HeadCircuit', 'Headlights', 'Headphones', 'Headset', 'Heart', 'HeartBreak', 'HeartHalf', 'HeartStraight', 'HeartStraightBreak', 'Heartbeat', 'Hexagon', 'HighDefinition', 'HighHeel', 'Highlighter', 'HighlighterCircle', 'Hockey', 'Hoodie', 'Horse', 'Hospital', 'Hourglass', 'HourglassHigh', 'HourglassLow', 'HourglassMedium', 'HourglassSimple', 'HourglassSimpleHigh', 'HourglassSimpleLow', 'HourglassSimpleMedium', 'House', 'HouseLine', 'HouseSimple', 'Hurricane', 'IceCream', 'IdentificationBadge', 'IdentificationCard', 'Image', 'ImageBroken', 'ImageSquare', 'Images', 'ImagesSquare', 'Infinity', 'Info', 'InstagramLogo', 'Intersect', 'IntersectSquare', 'IntersectThree', 'Intersection', 'Invoice', 'Island', 'Jar', 'JarLabel', 'Jeep', 'Joystick', 'Kanban', 'Key', 'KeyReturn', 'Keyboard', 'Keyhole', 'Knife', 'Ladder', 'LadderSimple', 'Lamp', 'LampPendant', 'Laptop', 'Lasso', 'LastfmLogo', 'Layout', 'Leaf', 'Lectern', 'Lego', 'LegoSmiley', 'LessThan', 'LessThanOrEqual', 'LetterCircleH', 'LetterCircleP', 'LetterCircleV', 'Lifebuoy', 'Lightbulb', 'LightbulbFilament', 'Lighthouse', 'Lightning', 'LightningA', 'LightningSlash', 'LineSegment', 'LineSegments', 'LineVertical', 'Link', 'LinkBreak', 'LinkSimple', 'LinkSimpleBreak', 'LinkSimpleHorizontal', 'LinkSimpleHorizontalBreak', 'LinkedinLogo', 'LinktreeLogo', 'LinuxLogo', 'List', 'ListBullets', 'ListChecks', 'ListDashes', 'ListHeart', 'ListMagnifyingGlass', 'ListNumbers', 'ListPlus', 'ListStar', 'Lock', 'LockKey', 'LockKeyOpen', 'LockLaminated', 'LockLaminatedOpen', 'LockOpen', 'LockSimple', 'LockSimpleOpen', 'Lockers', 'Log', 'MagicWand', 'Magnet', 'MagnetStraight', 'MagnifyingGlass', 'MagnifyingGlassMinus', 'MagnifyingGlassPlus', 'Mailbox', 'MapPin', 'MapPinArea', 'MapPinLine', 'MapPinPlus', 'MapPinSimple', 'MapPinSimpleArea', 'MapPinSimpleLine', 'MapTrifold', 'MarkdownLogo', 'MarkerCircle', 'Martini', 'MaskHappy', 'MaskSad', 'MastodonLogo', 'MathOperations', 'MatrixLogo', 'Medal', 'MedalMilitary', 'MediumLogo', 'Megaphone', 'MegaphoneSimple', 'MemberOf', 'Memory', 'MessengerLogo', 'MetaLogo', 'Meteor', 'Metronome', 'Microphone', 'MicrophoneSlash', 'MicrophoneStage', 'Microscope', 'MicrosoftExcelLogo', 'MicrosoftOutlookLogo', 'MicrosoftPowerpointLogo', 'MicrosoftTeamsLogo', 'MicrosoftWordLogo', 'Minus', 'MinusCircle', 'MinusSquare', 'Money', 'MoneyWavy', 'Monitor', 'MonitorArrowUp', 'MonitorPlay', 'Moon', 'MoonStars', 'Moped', 'MopedFront', 'Mosque', 'Motorcycle', 'Mountains', 'Mouse', 'MouseLeftClick', 'MouseMiddleClick', 'MouseRightClick', 'MouseScroll', 'MouseSimple', 'MusicNote', 'MusicNoteSimple', 'MusicNotes', 'MusicNotesMinus', 'MusicNotesPlus', 'MusicNotesSimple', 'NavigationArrow', 'Needle', 'Network', 'NetworkSlash', 'NetworkX', 'Newspaper', 'NewspaperClipping', 'NotEquals', 'NotMemberOf', 'NotSubsetOf', 'NotSupersetOf', 'Notches', 'Note', 'NoteBlank', 'NotePencil', 'Notebook', 'Notepad', 'Notification', 'NotionLogo', 'NuclearPlant', 'NumberCircleEight', 'NumberCircleFive', 'NumberCircleFour', 'NumberCircleNine', 'NumberCircleOne', 'NumberCircleSeven', 'NumberCircleSix', 'NumberCircleThree', 'NumberCircleTwo', 'NumberCircleZero', 'NumberEight', 'NumberFive', 'NumberFour', 'NumberNine', 'NumberOne', 'NumberSeven', 'NumberSix', 'NumberSquareEight', 'NumberSquareFive', 'NumberSquareFour', 'NumberSquareNine', 'NumberSquareOne', 'NumberSquareSeven', 'NumberSquareSix', 'NumberSquareThree', 'NumberSquareTwo', 'NumberSquareZero', 'NumberThree', 'NumberTwo', 'NumberZero', 'Numpad', 'Nut', 'NyTimesLogo', 'Octagon', 'OfficeChair', 'Onigiri', 'OpenAiLogo', 'Option', 'Orange', 'OrangeSlice', 'Oven', 'Package', 'PaintBrush', 'PaintBrushBroad', 'PaintBrushHousehold', 'PaintBucket', 'PaintRoller', 'Palette', 'Panorama', 'Pants', 'PaperPlane', 'PaperPlaneRight', 'PaperPlaneTilt', 'Paperclip', 'PaperclipHorizontal', 'Parachute', 'Paragraph', 'Parallelogram', 'Park', 'Password', 'Path', 'PatreonLogo', 'Pause', 'PauseCircle', 'PawPrint', 'PaypalLogo', 'Peace', 'Pen', 'PenNib', 'PenNibStraight', 'Pencil', 'PencilCircle', 'PencilLine', 'PencilRuler', 'PencilSimple', 'PencilSimpleLine', 'PencilSimpleSlash', 'PencilSlash', 'Pentagon', 'Pentagram', 'Pepper', 'Percent', 'Person', 'PersonArmsSpread', 'PersonSimple', 'PersonSimpleBike', 'PersonSimpleCircle', 'PersonSimpleHike', 'PersonSimpleRun', 'PersonSimpleSki', 'PersonSimpleSnowboard', 'PersonSimpleSwim', 'PersonSimpleTaiChi', 'PersonSimpleThrow', 'PersonSimpleWalk', 'Perspective', 'Phone', 'PhoneCall', 'PhoneDisconnect', 'PhoneIncoming', 'PhoneList', 'PhoneOutgoing', 'PhonePause', 'PhonePlus', 'PhoneSlash', 'PhoneTransfer', 'PhoneX', 'PhosphorLogo', 'Pi', 'PianoKeys', 'PicnicTable', 'PictureInPicture', 'PiggyBank', 'Pill', 'PingPong', 'PintGlass', 'PinterestLogo', 'Pinwheel', 'Pipe', 'PipeWrench', 'PixLogo', 'Pizza', 'Placeholder', 'Planet', 'Plant', 'Play', 'PlayCircle', 'PlayPause', 'Playlist', 'Plug', 'PlugCharging', 'Plugs', 'PlugsConnected', 'Plus', 'PlusCircle', 'PlusMinus', 'PlusSquare', 'PokerChip', 'PoliceCar', 'Polygon', 'Popcorn', 'Popsicle', 'PottedPlant', 'Power', 'Prescription', 'Presentation', 'PresentationChart', 'Printer', 'Prohibit', 'ProhibitInset', 'ProjectorScreen', 'ProjectorScreenChart', 'Pulse', 'PushPin', 'PushPinSimple', 'PushPinSimpleSlash', 'PushPinSlash', 'PuzzlePiece', 'QrCode', 'Question', 'QuestionMark', 'Queue', 'Quotes', 'Rabbit', 'Racquet', 'Radical', 'Radio', 'RadioButton', 'Radioactive', 'Rainbow', 'RainbowCloud', 'Ranking', 'ReadCvLogo', 'Receipt', 'ReceiptX', 'Record', 'Rectangle', 'RectangleDashed', 'Recycle', 'RedditLogo', 'Repeat', 'RepeatOnce', 'ReplitLogo', 'Resize', 'Rewind', 'RewindCircle', 'RoadHorizon', 'Robot', 'Rocket', 'RocketLaunch', 'Rows', 'RowsPlusBottom', 'RowsPlusTop', 'Rss', 'RssSimple', 'Rug', 'Ruler', 'Sailboat', 'Scales', 'Scan', 'ScanSmiley', 'Scissors', 'Scooter', 'Screencast', 'Screwdriver', 'Scribble', 'ScribbleLoop', 'Scroll', 'Seal', 'SealCheck', 'SealPercent', 'SealQuestion', 'SealWarning', 'Seat', 'Seatbelt', 'SecurityCamera', 'Selection', 'SelectionAll', 'SelectionBackground', 'SelectionForeground', 'SelectionInverse', 'SelectionPlus', 'SelectionSlash', 'Shapes', 'Share', 'ShareFat', 'ShareNetwork', 'Shield', 'ShieldCheck', 'ShieldCheckered', 'ShieldChevron', 'ShieldPlus', 'ShieldSlash', 'ShieldStar', 'ShieldWarning', 'ShippingContainer', 'ShirtFolded', 'ShootingStar', 'ShoppingBag', 'ShoppingBagOpen', 'ShoppingCart', 'ShoppingCartSimple', 'Shovel', 'Shower', 'Shrimp', 'Shuffle', 'ShuffleAngular', 'ShuffleSimple', 'Sidebar', 'SidebarSimple', 'Sigma', 'SignIn', 'SignOut', 'Signature', 'Signpost', 'SimCard', 'Siren', 'SketchLogo', 'SkipBack', 'SkipBackCircle', 'SkipForward', 'SkipForwardCircle', 'Skull', 'SkypeLogo', 'SlackLogo', 'Sliders', 'SlidersHorizontal', 'Slideshow', 'Smiley', 'SmileyAngry', 'SmileyBlank', 'SmileyMeh', 'SmileyMelting', 'SmileyNervous', 'SmileySad', 'SmileySticker', 'SmileyWink', 'SmileyXEyes', 'SnapchatLogo', 'Sneaker', 'SneakerMove', 'Snowflake', 'SoccerBall', 'Sock', 'SolarPanel', 'SolarRoof', 'SortAscending', 'SortDescending', 'SoundcloudLogo', 'Spade', 'Sparkle', 'SpeakerHifi', 'SpeakerHigh', 'SpeakerLow', 'SpeakerNone', 'SpeakerSimpleHigh', 'SpeakerSimpleLow', 'SpeakerSimpleNone', 'SpeakerSimpleSlash', 'SpeakerSimpleX', 'SpeakerSlash', 'SpeakerX', 'Speedometer', 'Sphere', 'Spinner', 'SpinnerBall', 'SpinnerGap', 'Spiral', 'SplitHorizontal', 'SplitVertical', 'SpotifyLogo', 'SprayBottle', 'Square', 'SquareHalf', 'SquareHalfBottom', 'SquareLogo', 'SquareSplitHorizontal', 'SquareSplitVertical', 'SquaresFour', 'Stack', 'StackMinus', 'StackOverflowLogo', 'StackPlus', 'StackSimple', 'Stairs', 'Stamp', 'StandardDefinition', 'Star', 'StarAndCrescent', 'StarFour', 'StarHalf', 'StarOfDavid', 'SteamLogo', 'SteeringWheel', 'Steps', 'Stethoscope', 'Sticker', 'Stool', 'Stop', 'StopCircle', 'Storefront', 'Strategy', 'StripeLogo', 'Student', 'SubsetOf', 'SubsetProperOf', 'Subtitles', 'SubtitlesSlash', 'Subtract', 'SubtractSquare', 'Subway', 'Suitcase', 'SuitcaseRolling', 'SuitcaseSimple', 'Sun', 'SunDim', 'SunHorizon', 'Sunglasses', 'SupersetOf', 'SupersetProperOf', 'Swap', 'Swatches', 'SwimmingPool', 'Sword', 'Synagogue', 'Syringe', 'TShirt', 'Table', 'Tabs', 'Tag', 'TagChevron', 'TagSimple', 'Target', 'Taxi', 'TeaBag', 'TelegramLogo', 'Television', 'TelevisionSimple', 'TennisBall', 'Tent', 'Terminal', 'TerminalWindow', 'TestTube', 'TextAUnderline', 'TextAa', 'TextAlignCenter', 'TextAlignJustify', 'TextAlignLeft', 'TextAlignRight', 'TextB', 'TextColumns', 'TextH', 'TextHFive', 'TextHFour', 'TextHOne', 'TextHSix', 'TextHThree', 'TextHTwo', 'TextIndent', 'TextItalic', 'TextOutdent', 'TextStrikethrough', 'TextSubscript', 'TextSuperscript', 'TextT', 'TextTSlash', 'TextUnderline', 'Textbox', 'Thermometer', 'ThermometerCold', 'ThermometerHot', 'ThermometerSimple', 'ThreadsLogo', 'ThreeD', 'ThumbsDown', 'ThumbsUp', 'Ticket', 'TidalLogo', 'TiktokLogo', 'Tilde', 'Timer', 'TipJar', 'Tipi', 'Tire', 'ToggleLeft', 'ToggleRight', 'Toilet', 'ToiletPaper', 'Toolbox', 'Tooth', 'Tornado', 'Tote', 'ToteSimple', 'Towel', 'Tractor', 'Trademark', 'TrademarkRegistered', 'TrafficCone', 'TrafficSign', 'TrafficSignal', 'Train', 'TrainRegional', 'TrainSimple', 'Tram', 'Translate', 'Trash', 'TrashSimple', 'Tray', 'TrayArrowDown', 'TrayArrowUp', 'TreasureChest', 'Tree', 'TreeEvergreen', 'TreePalm', 'TreeStructure', 'TreeView', 'TrendDown', 'TrendUp', 'Triangle', 'TriangleDashed', 'Trolley', 'TrolleySuitcase', 'Trophy', 'Truck', 'TruckTrailer', 'TumblrLogo', 'TwitchLogo', 'TwitterLogo', 'Umbrella', 'UmbrellaSimple', 'Union', 'Unite', 'UniteSquare', 'Upload', 'UploadSimple', 'Usb', 'User', 'UserCheck', 'UserCircle', 'UserCircleCheck', 'UserCircleDashed', 'UserCircleGear', 'UserCircleMinus', 'UserCirclePlus', 'UserFocus', 'UserGear', 'UserList', 'UserMinus', 'UserPlus', 'UserRectangle', 'UserSound', 'UserSquare', 'UserSwitch', 'Users', 'UsersFour', 'UsersThree', 'Van', 'Vault', 'VectorThree', 'VectorTwo', 'Vibrate', 'Video', 'VideoCamera', 'VideoCameraSlash', 'VideoConference', 'Vignette', 'VinylRecord', 'VirtualReality', 'Virus', 'Visor', 'Voicemail', 'Volleyball', 'Wall', 'Wallet', 'Warehouse', 'Warning', 'WarningCircle', 'WarningDiamond', 'WarningOctagon', 'WashingMachine', 'Watch', 'WaveSawtooth', 'WaveSine', 'WaveSquare', 'WaveTriangle', 'Waveform', 'WaveformSlash', 'Waves', 'Webcam', 'WebcamSlash', 'WebhooksLogo', 'WechatLogo', 'WhatsappLogo', 'Wheelchair', 'WheelchairMotion', 'WifiHigh', 'WifiLow', 'WifiMedium', 'WifiNone', 'WifiSlash', 'WifiX', 'Wind', 'Windmill', 'WindowsLogo', 'Wine', 'Wrench', 'X', 'XCircle', 'XLogo', 'XSquare', 'Yarn', 'YinYang', 'YoutubeLogo');
  CREATE TABLE IF NOT EXISTS "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"blur_data" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_hero_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_about_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'About',
  	"content" jsonb,
  	"override_title" varchar,
  	"link_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_big_list_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_big_list_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_title_with_blocks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_hero_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_about_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'About',
  	"content" jsonb,
  	"override_title" varchar,
  	"link_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_big_list_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_big_list_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_title_with_blocks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "payload_jobs_log" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"executed_at" timestamp(3) with time zone NOT NULL,
  	"completed_at" timestamp(3) with time zone NOT NULL,
  	"task_slug" "enum_payload_jobs_log_task_slug" NOT NULL,
  	"task_i_d" varchar NOT NULL,
  	"input" jsonb,
  	"output" jsonb,
  	"state" "enum_payload_jobs_log_state" NOT NULL,
  	"error" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "payload_jobs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"input" jsonb,
  	"completed_at" timestamp(3) with time zone,
  	"total_tried" numeric DEFAULT 0,
  	"has_error" boolean DEFAULT false,
  	"error" jsonb,
  	"task_slug" "enum_payload_jobs_task_slug",
  	"queue" varchar DEFAULT 'default',
  	"wait_until" timestamp(3) with time zone,
  	"processing" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"pages_id" integer,
  	"payload_jobs_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "navigation_navigation_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"override_label" boolean DEFAULT false,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "navigation" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "navigation_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "footer_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_footer_social_links_icon" NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hero_block" ADD CONSTRAINT "pages_blocks_hero_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hero_block" ADD CONSTRAINT "pages_blocks_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_about_section" ADD CONSTRAINT "pages_blocks_about_section_link_id_pages_id_fk" FOREIGN KEY ("link_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_about_section" ADD CONSTRAINT "pages_blocks_about_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_rich_text" ADD CONSTRAINT "pages_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_big_list_block_items" ADD CONSTRAINT "pages_blocks_big_list_block_items_link_id_pages_id_fk" FOREIGN KEY ("link_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_big_list_block_items" ADD CONSTRAINT "pages_blocks_big_list_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_big_list_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_big_list_block" ADD CONSTRAINT "pages_blocks_big_list_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_title_with_blocks" ADD CONSTRAINT "pages_blocks_title_with_blocks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_hero_block" ADD CONSTRAINT "_pages_v_blocks_hero_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_hero_block" ADD CONSTRAINT "_pages_v_blocks_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_about_section" ADD CONSTRAINT "_pages_v_blocks_about_section_link_id_pages_id_fk" FOREIGN KEY ("link_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_about_section" ADD CONSTRAINT "_pages_v_blocks_about_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_rich_text" ADD CONSTRAINT "_pages_v_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_big_list_block_items" ADD CONSTRAINT "_pages_v_blocks_big_list_block_items_link_id_pages_id_fk" FOREIGN KEY ("link_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_big_list_block_items" ADD CONSTRAINT "_pages_v_blocks_big_list_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_big_list_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_big_list_block" ADD CONSTRAINT "_pages_v_blocks_big_list_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_title_with_blocks" ADD CONSTRAINT "_pages_v_blocks_title_with_blocks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_jobs_log" ADD CONSTRAINT "payload_jobs_log_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_payload_jobs_fk" FOREIGN KEY ("payload_jobs_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "navigation_navigation_links" ADD CONSTRAINT "navigation_navigation_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "navigation_rels" ADD CONSTRAINT "navigation_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "navigation_rels" ADD CONSTRAINT "navigation_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_social_links" ADD CONSTRAINT "footer_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_block_order_idx" ON "pages_blocks_hero_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_block_parent_id_idx" ON "pages_blocks_hero_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_block_path_idx" ON "pages_blocks_hero_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_block_image_idx" ON "pages_blocks_hero_block" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_section_order_idx" ON "pages_blocks_about_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_section_parent_id_idx" ON "pages_blocks_about_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_section_path_idx" ON "pages_blocks_about_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_section_link_idx" ON "pages_blocks_about_section" USING btree ("link_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_rich_text_order_idx" ON "pages_blocks_rich_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_rich_text_parent_id_idx" ON "pages_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_rich_text_path_idx" ON "pages_blocks_rich_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_big_list_block_items_order_idx" ON "pages_blocks_big_list_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_big_list_block_items_parent_id_idx" ON "pages_blocks_big_list_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_big_list_block_items_link_idx" ON "pages_blocks_big_list_block_items" USING btree ("link_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_big_list_block_order_idx" ON "pages_blocks_big_list_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_big_list_block_parent_id_idx" ON "pages_blocks_big_list_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_big_list_block_path_idx" ON "pages_blocks_big_list_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_title_with_blocks_order_idx" ON "pages_blocks_title_with_blocks" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_title_with_blocks_parent_id_idx" ON "pages_blocks_title_with_blocks" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_title_with_blocks_path_idx" ON "pages_blocks_title_with_blocks" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_block_order_idx" ON "_pages_v_blocks_hero_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_block_parent_id_idx" ON "_pages_v_blocks_hero_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_block_path_idx" ON "_pages_v_blocks_hero_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_block_image_idx" ON "_pages_v_blocks_hero_block" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_section_order_idx" ON "_pages_v_blocks_about_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_section_parent_id_idx" ON "_pages_v_blocks_about_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_section_path_idx" ON "_pages_v_blocks_about_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_section_link_idx" ON "_pages_v_blocks_about_section" USING btree ("link_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_rich_text_order_idx" ON "_pages_v_blocks_rich_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_rich_text_parent_id_idx" ON "_pages_v_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_rich_text_path_idx" ON "_pages_v_blocks_rich_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_big_list_block_items_order_idx" ON "_pages_v_blocks_big_list_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_big_list_block_items_parent_id_idx" ON "_pages_v_blocks_big_list_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_big_list_block_items_link_idx" ON "_pages_v_blocks_big_list_block_items" USING btree ("link_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_big_list_block_order_idx" ON "_pages_v_blocks_big_list_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_big_list_block_parent_id_idx" ON "_pages_v_blocks_big_list_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_big_list_block_path_idx" ON "_pages_v_blocks_big_list_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_title_with_blocks_order_idx" ON "_pages_v_blocks_title_with_blocks" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_title_with_blocks_parent_id_idx" ON "_pages_v_blocks_title_with_blocks" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_title_with_blocks_path_idx" ON "_pages_v_blocks_title_with_blocks" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "payload_jobs_log_order_idx" ON "payload_jobs_log" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "payload_jobs_log_parent_id_idx" ON "payload_jobs_log" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "payload_jobs_completed_at_idx" ON "payload_jobs" USING btree ("completed_at");
  CREATE INDEX IF NOT EXISTS "payload_jobs_total_tried_idx" ON "payload_jobs" USING btree ("total_tried");
  CREATE INDEX IF NOT EXISTS "payload_jobs_has_error_idx" ON "payload_jobs" USING btree ("has_error");
  CREATE INDEX IF NOT EXISTS "payload_jobs_task_slug_idx" ON "payload_jobs" USING btree ("task_slug");
  CREATE INDEX IF NOT EXISTS "payload_jobs_queue_idx" ON "payload_jobs" USING btree ("queue");
  CREATE INDEX IF NOT EXISTS "payload_jobs_wait_until_idx" ON "payload_jobs" USING btree ("wait_until");
  CREATE INDEX IF NOT EXISTS "payload_jobs_processing_idx" ON "payload_jobs" USING btree ("processing");
  CREATE INDEX IF NOT EXISTS "payload_jobs_updated_at_idx" ON "payload_jobs" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_jobs_created_at_idx" ON "payload_jobs" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_payload_jobs_id_idx" ON "payload_locked_documents_rels" USING btree ("payload_jobs_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "navigation_navigation_links_order_idx" ON "navigation_navigation_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "navigation_navigation_links_parent_id_idx" ON "navigation_navigation_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "navigation_rels_order_idx" ON "navigation_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "navigation_rels_parent_idx" ON "navigation_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "navigation_rels_path_idx" ON "navigation_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "navigation_rels_pages_id_idx" ON "navigation_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "footer_social_links_order_idx" ON "footer_social_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_social_links_parent_id_idx" ON "footer_social_links" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "pages_blocks_hero_block" CASCADE;
  DROP TABLE "pages_blocks_about_section" CASCADE;
  DROP TABLE "pages_blocks_rich_text" CASCADE;
  DROP TABLE "pages_blocks_big_list_block_items" CASCADE;
  DROP TABLE "pages_blocks_big_list_block" CASCADE;
  DROP TABLE "pages_blocks_title_with_blocks" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_block" CASCADE;
  DROP TABLE "_pages_v_blocks_about_section" CASCADE;
  DROP TABLE "_pages_v_blocks_rich_text" CASCADE;
  DROP TABLE "_pages_v_blocks_big_list_block_items" CASCADE;
  DROP TABLE "_pages_v_blocks_big_list_block" CASCADE;
  DROP TABLE "_pages_v_blocks_title_with_blocks" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "payload_jobs_log" CASCADE;
  DROP TABLE "payload_jobs" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "navigation_navigation_links" CASCADE;
  DROP TABLE "navigation" CASCADE;
  DROP TABLE "navigation_rels" CASCADE;
  DROP TABLE "footer_social_links" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  DROP TYPE "public"."enum_payload_jobs_log_state";
  DROP TYPE "public"."enum_payload_jobs_task_slug";
  DROP TYPE "public"."enum_footer_social_links_icon";`)
}
