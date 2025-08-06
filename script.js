document.addEventListener('DOMContentLoaded', () => {
    const photoUpload = document.getElementById('photoUpload');
    const neuvainePhoto = document.getElementById('neuvaine-photo');
    const bougie = document.getElementById('bougie');
    const demandeDuJour = document.getElementById('demandeDuJour');
    const saveDemandeBtn = document.getElementById('saveDemande');
    const priereDuJourContainer = document.getElementById('priere-du-jour');
    
    // Prières pour chaque jour
    const prieres = [
        // Jour 1
        {
            titre: 'PREMIER JOUR (en l’honneur des Séraphins)',
            texte: 'Prince très glorieux de la Milice céleste, Saint Michel Archange, défendez-nous dans le combat contre les princes et les puissances, contre les dominateurs de ce monde de ténèbres, contre les esprits méchants répandus dans l’air. venez au secours des hommes que Dieu a faits à l’image de Sa propre Nature, et rachetés à grand prix de la tyrannie du démon. Ainsi soit-il. Extrait de l’exorcisme de Léon XIII'
        },
        // Jour 2
        {
            titre: 'DEUXIÈME JOUR (en l’honneur des Chérubins)',
            texte: 'Saint Michel, Prince de la Milice des Anges, je vous invoque, exaucez-moi. Je vous supplie de prendre mon âme, au dernier jour, sous votre très sainte garde et de la conduire au lieu de rafraîchissement, de la paix et du repos, où les âmes des saints attendent dans la joie ineffable le jugement à venir et la gloire de la résurrection glorieuse. Que je parle ou me taise, que je veille, que je marche ou me repose, gardez-moi dans l’accomplissement de toutes mes oeuvres, dans tous les actes de ma vie. Préservez-moi des tentations des démons et des peines de l’enfer. Ainsi soit-il. D’après un manuscrit du XVe siècle.'
        },
        // Jour 3
        {
            titre: 'TROISIÈME JOUR (en l’honneur des Trônes)',
            texte: 'Grand défenseur du peuple chrétien, Saint Michel Archange, pour remplir dignement la mission qui vous a été confiée de défendre l’Église, terrassez l’hérésie, exterminez les schismes et confondez l’incrédulité. Multipliez vos victoires sur les monstres infernaux qui veulent détruire notre foi. Que l’Église de Jésus-Christ accueille de nouveaux fidèles et s’agrège des royaumes entiers afin qu’elle puisse peupler le Ciel d’âmes élues, pour la plus grande gloire du divin Rédempteur, à qui vous-même devez vos triomphes, vos mérites et votre éternelle félicité. Ainsi soit-il. Prière de Léon XIII'
        },
        // Jour 4
        {
            titre: 'QUATRIÈME JOUR (en l’honneur des Dominations)',
            texte: 'Ô vous, qui êtes le prince et le Porte-Étendard des bons Anges, assistez-moi toujours dans votre bonté et sauvez-moi. Des légions de l’ange des ténèbres préservez-moi, afin que, sous votre conduite, je partage la lumière des bons Anges. Devant le trône du Juge Suprême, soyez mon défenseur, plaidez ma cause et conjurez la colère du Juste Vengeur. Que, par vous, à mes travaux, à mon repos, à mes jours et à mes nuits soit donnée la prospérité; que ma pensée soit toujours prête pour les oeuvres de Dieu. Ainsi soit-il. Hymne du XIIe siècle.'
        },
        // Jour 5
        {
            titre: 'CINQUIÈME JOUR (en l’honneur des Puissances)',
            texte: 'Saint Michel Archange, vous que la sainte Église vénère comme son gardien et protecteur, à vous le Seigneur a confié la mission d’introduire dans la céleste félicité les âmes rachetées. Priez donc le Dieu de paix d’écraser Satan sous nos pieds afin qu’il ne puisse plus retenir les hommes dans ses chaînes et nuire à l’Église. Présentez au Très-Haut nos prières, afin que, sans tarder, le Seigneur nous fasse miséricorde. Vous-même, saisissez le dragon, l’antique serpent, qui est le diable et Satan, et jetez-le enchaîné dans l’abîme, pour qu’il ne séduise plus les nations. Ainsi soit-il. Extrait de l’exorcisme de Léon XIII.'
        },
        // Jour 6
        {
            titre: 'SIXIÈME JOUR (en l’honneur des Vertus)',
            texte: 'Saint Michel Archange, défendez-nous dans le combat, afin que nous ne périssions pas au jour du redoutable jugement. prince très glorieux, souvenez-vous de nous, partout et toujours. Quand vous combattiez le dragon, on entendit dans le ciel la voix de ceux qui disaient : “Salut, honneur et gloire au Dieu Tout-Puissant !” La mer se souleva, la terre trembla, quand vous descendîtes du Ciel, venez au secours du peuple de Dieu. Ainsi soit-il. Traduit d’un Répons de Coutances.'
        },
        // Jour 7
        {
            titre: 'SEPTIÈME JOUR (en l’honneur des Principautés)',
            texte: 'Ô ! Saint Michel, Prince trois fois saint de la Milice sacrée, chargé par Dieu d’organiser et conduire les phalanges angéliques, très digne de tout culte, de toute louange et de tout éloge : éclairez mes sens intérieurs, fortifiez mon pauvre cœur agité par les tempêtes de cette vie, élevez vers les hauteurs de la céleste sagesse mon esprit incliné vers les choses de la terre; affermissez mes pas chancelants et ne permettez pas que j’abandonne le sentier qui conduit aux Cieux; guérissez les plaies de mon âme; faites disparaître la trace de toutes les souffrances qu’engendrent en moi mes misères et mes malheurs. Ainsi soit-il. Prière de saint Sophrone.'
        },
        // Jour 8
        {
            titre: 'HUITIÈME JOUR (en l’honneur des Archanges)',
            texte: 'Archange Saint Michel, qui avez pour mission de recueillir nos prières, de diriger nos combats et de peser nos âmes, je rends hommage à votre beauté, — si semblable à celle de Dieu, qu’après son Verbe éternel aucun autre esprit céleste ne vous est comparable, — à votre pouvoir sans limites en faveur de ceux qui vous sont dévots; à votre volonté, harmonieusement unie à celle du Cœur Sacré de Jésus et du Cœur Immaculé de Marie, pour le bien de l’homme (1). Défendez-moi contre les ennemis de mon âme et de mon corps. rendez-moi sensible au réconfort de votre assistance invisible et les effets de votre vigilante tendresse. Ainsi soit-il. (1) Vén. Philomène de Sainte-Colombe.'
        },
        // Jour 9
        {
            titre: 'NEUVIÈME JOUR (en l’honneur des Anges)',
            texte: 'Glorieux Archange Saint Michel, grand zélateur de la gloire de Dieu et protecteur de l’Église universelle, vous à qui le Tout-Puissant a confié la mission de recevoir les âmes à la sortie du corps pour les présenter au très juste Juge; daignez me secourir dans mon dernier combat. Accompagné de mon bon Ange gardien, venez à mon aide et chassez loin de moi tous les esprits infernaux. Ne permettez pas qu’ils m’épouvantent alors. Fortifiez-moi dans la Foi, l’Espérance et la Charité, afin que mon âme, portée par vous à son juge, soit introduite aussitôt au lieu du repos, pour y régner éternellement avec son Rédempteur, dans la société des Esprits bienheureux. Ainsi soit-il. Sources: D’après une antique formule de prière. Nihil Obstat :Constantiis, die 18 a feb. 1949 -L. LERIDEZ c. d’Imprimatur + JEAN Évêque de Coutances et Avranches.'
        }
    ];

    // Gérer le téléchargement de la photo
    photoUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                neuvainePhoto.src = e.target.result;
                neuvainePhoto.style.display = 'block';
                localStorage.setItem('neuvainePhoto', e.target.result);
            };
            reader.readAsDataURL(file);
            bougie.src = 'candle-lit.png'; // Changer l'image de la bougie
            bougie.classList.remove('bougie-unlit');
            localStorage.setItem('bougieState', 'lit');
        }
    });

    // Restaurer la photo et la bougie au chargement
    const savedPhoto = localStorage.getItem('neuvainePhoto');
    if (savedPhoto) {
        neuvainePhoto.src = savedPhoto;
        neuvainePhoto.style.display = 'block';
    }

    const bougieState = localStorage.getItem('bougieState');
    if (bougieState === 'lit') {
        bougie.src = 'candle-lit.png';
        bougie.classList.remove('bougie-unlit');
    }

    // Gérer la sauvegarde de la demande
    saveDemandeBtn.addEventListener('click', () => {
        const demande = demandeDuJour.value;
        localStorage.setItem('demandeNeuvaine', demande);
        updateDemandeInPriere(demande);
        alert('Votre demande a été sauvegardée !');
    });

    // Mettre à jour le texte de la prière avec la demande
    function updateDemandeInPriere(demande) {
        const placeholders = document.querySelectorAll('.demande-placeholder');
        placeholders.forEach(placeholder => {
            placeholder.textContent = demande.trim() || "(formuler votre demande)";
        });
    }

    // Restaurer la demande au chargement de la page
    const savedDemande = localStorage.getItem('demandeNeuvaine');
    if (savedDemande) {
        demandeDuJour.value = savedDemande;
        updateDemandeInPriere(savedDemande);
    }
    
    // Afficher la prière du jour
    const aujourdHui = new Date();
    const jourDeLaNeuvaine = aujourdHui.getDate() - 20; // 21 septembre est le jour 1

    if (jourDeLaNeuvaine >= 1 && jourDeLaNeuvaine <= 9) {
        const priereDuJour = prieres[jourDeLaNeuvaine - 1];
        const priereBlock = document.createElement('div');
        priereBlock.classList.add('prieur-block');
        priereBlock.innerHTML = `
            <h2>${priereDuJour.titre}</h2>
            <p>${priereDuJour.texte}</p>
        `;
        priereDuJourContainer.appendChild(priereBlock);
    } else {
        priereDuJourContainer.innerHTML = `<p>La neuvaine n'est pas en cours.</p>`;
    }
});
